import React from 'react';
import immutable from 'immutable';
import { enumToValueArray } from 'Util/helpers';
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
  INNER_STEPS,
  CONFIRMATION_STEP
}

export enum personSignUpStepEnum {
  BASIC_INFO_STEP
}

export enum venueSignUpStepEnum {
  BASIC_INFO_STEP,
  ADDRESS_STEP
}
const personSignUpStepList = enumToValueArray(personSignUpStepEnum)
const venueSignUpStepList = enumToValueArray(venueSignUpStepEnum)

const userStepListMap = {
  [UserTypes.Artist]: personSignUpStepList,
  [UserTypes.Fan]: personSignUpStepList,
  [UserTypes.Venue]: venueSignUpStepList
} 

export const getUserSteps = (userType: UserType) => {
  console.log(userStepListMap[userType])
  return userStepListMap[userType];

}

export type SignUpStateType = {
  [key in UserType]?: {
    basicInfoData?: BasicInfoData,
    addressData?: AddressData
    innerStep: number
  }
} & {
  outerStep: SignUpStepEnum,
  userType: UserType
}

export type SignUpAction = {
  type: SignUpActionTypeEnum,
  payload?: number | BasicInfoData | AddressData | UserType | null
}

const initialSignUpState: SignUpStateType = {
  outerStep: SignUpStepEnum.INITIAL_STEP,
  userType: UserTypes.Artist,
  [UserTypes.Artist]: {
    innerStep: 0
  },
  [UserTypes.Fan]: {
    innerStep: 0
  },
  [UserTypes.Venue]: {
    innerStep: 0
  },
}

export type SignUpDispatch = (action: SignUpAction) => void

const SignUpStateContext = React.createContext<SignUpStateType>(initialSignUpState)
const SignUpDispatchContext = React.createContext<SignUpDispatch>(() => {throw new Error(DispatchPreUse)});

const signUpReducer = (state:SignUpStateType, action: SignUpAction ) => {
  const userType = state.userType;
  const step = immutable.getIn(state, ['outerStep'], SignUpStepEnum.INITIAL_STEP)
  const innerStep = immutable.getIn(state, [`${state.userType}`, 'innerStep'], 0);
  const innerStepList = userStepListMap[userType];
  const lastInnerStep = innerStepList.slice(-1)[0];
  const firstInnerStep = innerStepList[0];
  switch(action.type) {
    case SignUpActionTypeEnum.SET_USER_TYPE:
      return immutable.setIn(state, ['userType'], action.payload as UserType)
    case SignUpActionTypeEnum.INCREMENT_STEP:
      if(step === SignUpStepEnum.INNER_STEPS && innerStep < lastInnerStep) {
        return immutable.setIn(state, [`${state.userType}`, 'innerStep'], state[`${state.userType}`].innerStep + 1)  
      } else {
        return immutable.setIn(state, ['outerStep'], state.outerStep + 1)
      }
    case SignUpActionTypeEnum.DECREMENT_STEP:
      if((step > SignUpStepEnum.INNER_STEPS) || ((step === SignUpStepEnum.INNER_STEPS) && innerStep ===  firstInnerStep)) {
        return immutable.setIn(state, ['outerStep'], state.outerStep - 1)
      } else{
        return immutable.setIn(state, [`${state.userType}`, 'innerStep'], state[`${state.userType}`].innerStep - 1)  
      }
    case SignUpActionTypeEnum.SET_STEP:
      return immutable.setIn(state, ['outerStep'], action.payload)
    case SignUpActionTypeEnum.SET_BASIC_INFO_DATA:
      return immutable.setIn(state, [`${state.userType}`,'basicInfoData'], action.payload);
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



