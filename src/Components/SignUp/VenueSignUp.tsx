import React, { useEffect } from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, FormikProps } from "formik";
import * as yup from "yup";
import get from "lodash/fp/get";
import ActionButton from "Components/Buttons/ActionButton";
import AddressForm, { AddressData } from "Components/Forms/AddressForm";
import BasicInfoForm, { BasicInfoData } from "Components/Forms/BasicInfoForm";
import {
  SignUpStateType,
  useSignUpState,
  SignUpDispatch,
  useSignUpDispatch,
  venueSignUpStepEnum,
  SignUpActionTypeEnum
} from "Components/SignUp/SignUpContext";
import { UnknownVenueSignUpStep } from "Util/Errors";
import  composeFormErrors from "Components/Forms/composeFormErrors";
import { UserType } from "Types";

const useStyles = makeStyles((theme: Theme) => ({
  FormContainer: {
    margin: "0 1rem",
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    flexFlow: "wrap",
    maxWidth: "500px",
    "& #username": {
      flexBasis: "100%"
    }
  },
  Title: {
    flexBasis: "100%",
    textAlign: "center",
    marginBottom: "1rem",
    fontSize: "2rem",
    color: "#333333"
  },
  LocalNavButton: {
    position: "absolute",
    top: "1rem",
    left: "1rem"
  }
}));

const minPasswordLength = 8;
const venueformSchema = yup.object().shape({
  name: yup.string().required("Venue name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email(),
  phoneNumber: yup
    .string()
    .required("Phone number is a required field")
    .matches(/^(?:1\s){0,1}\(\d{3}\)\s\d{3}-\d{4}$/, "Incorrect Format"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(minPasswordLength)
    .matches(/\d/, "Password must contain at leat one number.")
    .matches(/[a-zA-Z]/, "Password must contain at leat one letter.")
    .matches(
      /[!@#$%^&*]/,
      "Password must contain at leat one special character."
    )
});

const addressformSchema = yup.object().shape({
  address1: yup.string().required("Address 1 is a required field"),
  zipcode: yup
    .string()
    .required("Zipcode is a required field")
    .matches(/^[0-9]{5}(?:-[0-9]{4})?$/, "Incorrect format"),
  city: yup.string().required("City is a required field"),
  state: yup.string().required("State is a required field")
});

type VenueFormProps = {
  signUpDispatch: SignUpDispatch;
  userType: UserType;
} & FormikProps<BasicInfoData>;

const VenueForm: React.FC<VenueFormProps> = (props: VenueFormProps) => {
  const {
    errors,
    handleSubmit,
    handleChange,
    values,
    signUpDispatch,
    userType
  } = props;
  const classes = useStyles({});

  React.useEffect(() => {
    signUpDispatch({
      type: SignUpActionTypeEnum.SET_BASIC_INFO_DATA,
      payload: values
    });
  });
  return (
    <Form onSubmit={handleSubmit}>
      <div className={classes.FormContainer}>
        <BasicInfoForm
          showFields={{
            email:true,
            phoneNumber:true,
            name:true,
            password:true
          }}
          fieldProps={{
            name:{
              upperlabel:"Venue Name",
              placeholder:"Your Business",
              variant:"outlined"
            }
          }}
          values={values}
          errors={errors}
          userType={userType}
          handleChange={async (e:any) => {
            await handleChange(e)
            console.log(props.errors)
          }}
        />
        <ActionButton type="submit">{"Next"}</ActionButton>
      </div>
    </Form>
  );
};

type VenueBasicInfoProps = { initialValues: BasicInfoData };

const VenueBasicInfo: React.FC<VenueBasicInfoProps> = (
  props: VenueBasicInfoProps
) => {
  const { initialValues } = props;
  const signUpState: SignUpStateType = useSignUpState();
  const signUpDispatch: SignUpDispatch = useSignUpDispatch();
  const nextOnClick = () =>
    signUpDispatch({ type: SignUpActionTypeEnum.INCREMENT_STEP });

  return (
    <Formik
      initialValues={initialValues}
      validate={(values: BasicInfoData) =>
        venueformSchema
          .validate(values, { abortEarly: false })
          // oddly this needs some kind of function in the .then
          // to work
          .then(()=>{})
          .catch(composeFormErrors)
      }
      validateOnChange={false}
      onSubmit={(values: BasicInfoData, actions) => {
        actions.setSubmitting(false);
        nextOnClick();
        return;
      }}
    >
      {props => (
        <VenueForm
          {...props}
          userType={signUpState.userType}
          signUpDispatch={signUpDispatch}
        />
      )}
    </Formik>
  );
};

type AddressFormContainerProps = {
  signUpDispatch: SignUpDispatch;
} & FormikProps<AddressData>;

const AddressFormContainer: React.FC<AddressFormContainerProps> = (
  props: AddressFormContainerProps
) => {
  const { errors, handleSubmit, handleChange, values, signUpDispatch } = props;
  const classes = useStyles({});
  const nextOnClick = () =>
    signUpDispatch({ type: SignUpActionTypeEnum.INCREMENT_STEP });

  useEffect(() => {
    signUpDispatch({ type: SignUpActionTypeEnum.SET_ADDRESS, payload: values });
  });

  return (
    <Form
      onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(e);
        if (!Object.keys(errors).length) {
          nextOnClick();
          console.log("Form Submitted!");
        }
      }}
    >
      <div className={classes.FormContainer}>
        <AddressForm
          values={values}
          errors={errors}
          handleChange={handleChange}
        />
        <ActionButton type="submit">{"Create Account"}</ActionButton>
      </div>
    </Form>
  );
};

type AddressSignUpProps = {
  initialValues: AddressData;
};

const AddressSignUp: React.FC<AddressSignUpProps> = (
  props: AddressSignUpProps
) => {
  const signUpDispatch: SignUpDispatch = useSignUpDispatch();

  return (
    <Formik
      initialValues={props.initialValues}
      validate={(values: AddressData) =>
        addressformSchema
          .validate(values, { abortEarly: false })
          .then()
          .catch(composeFormErrors)
      }
      validateOnChange={false}
      onSubmit={(values: AddressData, actions) => {
        actions.setSubmitting(false);
        return;
      }}
    >
      {props => (
        <AddressFormContainer {...props} signUpDispatch={signUpDispatch} />
      )}
    </Formik>
  );
};

export type VenueSignUpProps = {};

const VenueSignUp: React.FC<VenueSignUpProps> = () => {
  const signUpState: SignUpStateType = useSignUpState();
  const innerStep = get([`${signUpState.userType}`, "innerStep"], signUpState);

  switch (innerStep) {
    case venueSignUpStepEnum.BASIC_INFO_STEP:
      return (
        <VenueBasicInfo
          initialValues={
            get([`${signUpState.userType}`, "basicInfoData"], signUpState) || {}
          }
        />
      );
    case venueSignUpStepEnum.ADDRESS_STEP:
      return (
        <AddressSignUp
          initialValues={
            get([`${signUpState.userType}`, "addressData"], signUpState) || {}
          }
        />
      );
    default:
      throw new Error(UnknownVenueSignUpStep(innerStep));
  }
};

export default VenueSignUp;
