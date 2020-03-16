import React from 'react';
import immutable from 'immutable';


import { UserType, UserTypes } from '../../Types';
import { ReducerUnrecognizedActionError, DispatchPreUse, UseSignUpStateError, UseSignUpDispatchError }  from '../../Util/Errors';
import { BasicInfoData } from 'Components/Forms/BasicInfoForm';
import { AddressData } from 'Components/Forms/AddressForm';

export enum SignUpActionTypeEnum {
  INCREMENT_STEP,
  DECREMENT_STEP,
  SET_STEP,
  SET_ADDRESS,
  SET_USER_TYPE,
  SET_BASIC_INFO_DATA,
}

export enum SignUpStepEnum {
  INITIAL_STEP,
  BASIC_INFO_STEP,
  ADDRESS_STEP,
  CONFIRMATION_STEP
}

export type SignUpStateType = {
  [key in UserType]?: {
    basicInfoData?: BasicInfoData,
    addressData?: AddressData
  }
} & {
  step: SignUpStepEnum,
  userType: UserType
}

export type SignUpAction = {
  type: SignUpActionTypeEnum,
  payload?: number | BasicInfoData | AddressData | UserType | null
}

const initialSignUpState: SignUpStateType = {
  step: SignUpStepEnum.INITIAL_STEP,
  userType: UserTypes.Artist
}

export type SignUpDispatch = (action: SignUpAction) => void

const SignUpStateContext = React.createContext<SignUpStateType>(initialSignUpState)
const SignUpDispatchContext = React.createContext<SignUpDispatch>(() => {throw new Error(DispatchPreUse)});

const signUpReducer = (state:SignUpStateType, action: SignUpAction ) => {
  switch(action.type) {
    case SignUpActionTypeEnum.SET_USER_TYPE:
      return immutable.setIn(state, ['userType'], action.payload as UserType)
    case SignUpActionTypeEnum.INCREMENT_STEP:
      return immutable.setIn(state, ['step'], state.step + 1)
    case SignUpActionTypeEnum.DECREMENT_STEP:
      return immutable.setIn(state, ['step'], state.step - 1)
    case SignUpActionTypeEnum.SET_STEP:
      return immutable.setIn(state, ['step'], action.payload)
    case SignUpActionTypeEnum.SET_BASIC_INFO_DATA:
      return immutable.setIn(state, [`${state.userType}`,'basicInfoData'], action.payload)
    case SignUpActionTypeEnum.SET_ADDRESS:
      return immutable.setIn(state, ['data', 'address'] , action.payload)
    default:
      throw new Error(ReducerUnrecognizedActionError((action.type as SignUpStepEnum).toString()))
  }
}

export const useSignUpState: () => SignUpStateType = () => {
  const context = React.useContext(SignUpStateContext)
  if (context === undefined) {
    throw new Error(UseSignUpStateError)
  }
  return context
}

export const useSignUpDispatch: () => SignUpDispatch = () => {
  const context = React.useContext(SignUpDispatchContext)
  if (context === undefined) {
    throw new Error(UseSignUpDispatchError)
  }
  return context
}

export type SignUpProviderProps = {
  children?: React.ReactNode
};

export const SignUpProvider: React.FC<SignUpProviderProps> = (props: SignUpProviderProps) => {
  const [ signUpState, dispatch ] = React.useReducer(signUpReducer, initialSignUpState);
  const { children } = props;
  return (
    <SignUpStateContext.Provider value={signUpState}>
      <SignUpDispatchContext.Provider value={dispatch}>
        {children}
      </SignUpDispatchContext.Provider>
    </SignUpStateContext.Provider>
  );
}



