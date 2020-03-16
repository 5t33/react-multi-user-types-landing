import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { 
  SignUpStateType, useSignUpState,  SignUpDispatch, useSignUpDispatch, SignUpActionTypeEnum, SignUpStepEnum
} from 'Components/SignUp/SignUpContext';
import ActionButton from 'Components/Buttons/ActionButton';
import BasicInfoForm, { BasicInfoData } from 'Components/Forms/BasicInfoForm';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { composeFormErrors } from 'Components/Forms/formHelpers';

const formSchema = yup.object().shape({
  name: yup.string()
            .required("Name i a required field"),
  email: yup.string().required()
                      .email("Email is a required field"),
  zipcode: yup.string().required("Zipcode is a required field")
                        .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, 'Must be 5 or 9 digits'),
  password: yup.string().required("Password is a required field")
                        .min(8)
                        .matches(/\d/, 'Password must contain at leat one number.')
                        .matches(/[a-zA-Z]/, 'Password must contain at leat one letter.')
                        .matches(/[!@#$%^&*]/, 'Password must contain at leat one special character.')

});

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    position: 'relative'
  },
  FormContainer: {
    display: 'flex',
    paddingRight: '1rem',
    paddingLeft: '1rem',
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
  Button: {
    [theme.breakpoints.down('xs')]: {
      maxWidth:'180px',                  
    },
  }
}))

export type PersonSignUpProps = {
  initialValues: BasicInfoData
}

const PersonSignUp: React.FC<PersonSignUpProps> = (props: PersonSignUpProps) => {
  const classes = useStyles({});
  const { initialValues } = props;
  const signUpState: SignUpStateType = useSignUpState();
  const signUpDispatch: SignUpDispatch  = useSignUpDispatch();
  const confirmationOnClick = () => signUpDispatch({type: SignUpActionTypeEnum.SET_STEP, payload: SignUpStepEnum.CONFIRMATION_STEP})
  return (
    <Formik
      initialValues = {initialValues}
      validate = {
        (values: BasicInfoData) => formSchema.validate(values, {abortEarly: false})
          .then(console.log)
          .catch(composeFormErrors)
      }
      validateOnChange={false}
      onSubmit={(values:BasicInfoData, actions) => {
        actions.setSubmitting(false)
        confirmationOnClick()
        return;
      }}
    >
      {({ touched, errors, isSubmitting, handleSubmit, handleChange, values }) => (
        <Form onSubmit={(e:React.FormEvent<HTMLFormElement>)=>{
            console.log(e.target)
            e.preventDefault(); console.log("submitting"); handleSubmit(e)
          }}>
          <div className={classes.FormContainer}>
            <BasicInfoForm values={values} errors={errors} userType={signUpState.userType} handleChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleChange(event)
              signUpDispatch({type: SignUpActionTypeEnum.SET_BASIC_INFO_DATA, payload:values})
            }}/>
            <ActionButton className={classes.Button} type='submit'>
              {"Create Account"}
            </ActionButton>    
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default PersonSignUp;