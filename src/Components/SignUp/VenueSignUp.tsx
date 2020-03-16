import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { get } from 'lodash/fp';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import ActionButton from 'Components/Buttons/ActionButton';
import AddressForm, { AddressData } from 'Components/Forms/AddressForm';
import BasicInfoForm, {BasicInfoData} from 'Components/Forms/BasicInfoForm';
import { 
  SignUpStateType, useSignUpState,SignUpDispatch, useSignUpDispatch,
  SignUpStepEnum, SignUpActionTypeEnum
} from 'Components/SignUp/SignUpContext';
import { UnknownVenueSignUpStep } from 'Util/Errors';
import { composeFormErrors } from 'Components/Forms/formHelpers';

const useStyles = makeStyles((theme: Theme) => ({
  FormContainer: {
    margin: '0 1rem',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexFlow: 'wrap',
    maxWidth: '500px',
    '& #username': {
      flexBasis: '100%',
    },
  },
  Title: {
    flexBasis:'100%',
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '2rem',
    color: '#333333'
  },
  LocalNavButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem'
  }
}))

const venueformSchema = yup.object().shape({

  venueName: yup.string()
            .required("Venue name is a required field"),      
  email: yup.string().required("Email is a required field")
                      .email(),
  phoneNumber: yup.string().required("Phone number is a required field").matches(/^(?:1\s){0,1}\(\d{3}\)\s\d{3}-\d{4}$/, 'Incorrect Format'),
  password: yup.string().required("Password is a required field")
                        .min(8)
                        .matches(/\d/, 'Password must contain at leat one number.')
                        .matches(/[a-zA-Z]/, 'Password must contain at leat one letter.')
                        .matches(/[!@#$%^&*]/, 'Password must contain at leat one special character.')
});


const addressformSchema = yup.object().shape({
  address1: yup.string()
            .required("Address 1 is a required field"),
  zipcode: yup.string().required("Zipcode is a required field")
              .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Incorrect format'),
  city: yup.string().required("City is a required field"),
  state: yup.string().required("State is a required field")
 });


type VenueBasicInfoProps = { initialValues: BasicInfoData}

const VenueBasicInfo = (props: VenueBasicInfoProps) => {
  
  const classes = useStyles({});
  let { initialValues } = props;
  const signUpState: SignUpStateType = useSignUpState();
  const signUpDispatch: SignUpDispatch  = useSignUpDispatch();
  const nextOnClick = () => signUpDispatch({type: SignUpActionTypeEnum.INCREMENT_STEP})

  return (
    <Formik
      initialValues = {initialValues}
      validate = {
        (values: BasicInfoData) => venueformSchema.validate(values, {abortEarly: false})
          .then(console.log)
          .catch(composeFormErrors)
      }
      validateOnChange={false}
      onSubmit={(values:BasicInfoData, actions) => {
        actions.setSubmitting(false)
        nextOnClick()
        return;
      }}
    >
      {({ touched, errors, isSubmitting, handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
            <div className={classes.FormContainer}>
              <BasicInfoForm values={values} errors={errors} userType={signUpState.userType} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(event)
                signUpDispatch({type: SignUpActionTypeEnum.SET_BASIC_INFO_DATA, payload:values})
              }}/>
              <ActionButton type='submit'>
                {"Next"}
              </ActionButton>
            </div>    
        </Form>
      )}
    </Formik>

)};


type AddressSignUpProps = { 
  initialValues: AddressData
}

const AddressSignUp = ((props: AddressSignUpProps) => {
  // bs until formik handleSubmit promise error is fixed
  // basicInfoSubmitted = false;
  // uglyGlobalStep = 1;
  const classes = useStyles({});
  const signUpDispatch: SignUpDispatch  = useSignUpDispatch();
  const nextOnClick = () => signUpDispatch({type: SignUpActionTypeEnum.INCREMENT_STEP})

  return (
      <Formik
      initialValues = {props.initialValues}
      validate = {
        (values: AddressData) => addressformSchema.validate(values, {abortEarly: false})
          .then(console.log)
          .catch(composeFormErrors)
      }
      validateOnChange={false}
      onSubmit={(values:AddressData, actions) => {
        actions.setSubmitting(false)
        nextOnClick()
        return;
      }}
    >
     {({ touched, errors, isSubmitting, handleSubmit, handleChange, values }) => (
        <Form onSubmit={async (e:React.FormEvent<HTMLFormElement>) => {
          console.log(e.target)
          e.preventDefault(); 
          
          await handleSubmit(e);
          console.log("errors on subit", errors)
          if(!Object.keys(errors).length) {
            // nextOnClick();
          }
        }}>
          <div className={classes.FormContainer}>
            <AddressForm values={values} errors={errors} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event)
              signUpDispatch({type: SignUpActionTypeEnum.SET_ADDRESS, payload:values})
            }}/>
            <ActionButton type='submit'>
              {"Create Account"}
            </ActionButton>
          </div>
        </Form>
     )}
    </Formik>
  )
})


export type VenueSignUpProps = {};

const VenueSignUp: React.FC<VenueSignUpProps> = (props: VenueSignUpProps) => {
  
  const signUpState: SignUpStateType = useSignUpState();

  switch(signUpState.step) {
      case SignUpStepEnum.BASIC_INFO_STEP: 
        return(
         <VenueBasicInfo initialValues={get([`${signUpState.userType}`, 'basicInfoData'], signUpState) || {}}/>
        )
      case SignUpStepEnum.ADDRESS_STEP: 
        return(
          <AddressSignUp initialValues={get([`${signUpState.userType}`, 'addressData'], signUpState) || {}}/>
        )
      default:
        throw new Error(UnknownVenueSignUpStep(signUpState.step));
    }
}

export default VenueSignUp;