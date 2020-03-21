import React from "react";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { UserTypes, UserType } from "Types";
import TextField, { FieldWithLabelProps } from "Components/Inputs/TextFieldUpperLabel";
import { UnknownUserTypeError } from "Util/Errors";
import { FormikErrors } from "formik";
import PhoneNumberTextField from "Components/Inputs/PhoneNumberTextField";

export type BasicInfoData = {
  userName?: string;
  email?: string;
  repeatEmail?: string;
  phoneNumber?: string;
  name?: string;
  firstName: string;
  lastName: string;
  password?: string;
  zipcode?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    justifyContent: "center",
    "& #username": {
      flexBasis: "100%"
    }
  },
  LocalTextField: {
    flex: "1 80%",
    margin: ".5rem",
    justifySelf: "left",
    [theme.breakpoints.down("xs")]: {
      margin: ".25rem"
    }
  }
}));

type fields =
  "userName" |
  "email" |
  "repeatEmail" |
  "phoneNumber" |
  "name" |
  "firstName" |
  "lastName" |
  "zipcode" |
  "password";

export type BasicInfoFormProps = {
  userType: UserType;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: BasicInfoData;
  errors: FormikErrors<BasicInfoData>;
  showFields: {
    [key in fields]?: boolean
  }, 
  fieldProps?: {
    [key in fields]?: FieldWithLabelProps
  }
};

const BasicInfoForm: React.FC<BasicInfoFormProps> = (
  props: BasicInfoFormProps
) => {
  const classes = useStyles();
  const { userType, handleChange, values, errors } = props;
  const isPerson = userType === UserTypes.Artist || userType === UserTypes.Fan;
  const isVenue = userType === UserTypes.Venue;

  const getOverrideProps = ( key: fields ) => 
    (props.fieldProps && props.fieldProps[key]) ? props.fieldProps[key] : {}

  const throwUnknownUserTypeError = (unknownUserType: string) => {
    throw new Error(UnknownUserTypeError(unknownUserType));
  };

  return (
    <div className={classes.root}>
      {!isPerson && !isVenue && throwUnknownUserTypeError(userType)}

      {props.showFields.userName && (
        <TextField
          id="userName"
          name="userName"
          upperlabel="User Name"
          variant="outlined"
          type="text"
          onChange={handleChange}
          placeholder="johndoe365"
          className={`${classes.LocalTextField}`}
          value={values.userName || ""}
          error={!!errors.userName}
          helperText={errors.userName}
          {...getOverrideProps("userName")}
        />
      )}

      {props.showFields.name && (
        <TextField
          id="name"
          name="name"
          upperlabel="Full Name"
          variant="outlined"
          type="text"
          onChange={handleChange}
          placeholder="John Doe"
          className={`${classes.LocalTextField}`}
          value={values.name || ""}
          error={!!errors.name}
          helperText={errors.name}
          {...getOverrideProps("name")}
        />
      )}

      {props.showFields.firstName && (
        <TextField
          id="firstName"
          name="firstName"
          upperlabel="First Name"
          variant="outlined"
          type="text"
          onChange={handleChange}
          placeholder="John"
          className={`${classes.LocalTextField}`}
          value={values.firstName || ""}
          error={!!errors.firstName}
          helperText={errors.firstName}
          {...getOverrideProps("firstName")}
        />
      )}

      {props.showFields.lastName && (
        <TextField
          id="lastName"
          name="lastName"
          upperlabel="Last Name"
          variant="outlined"
          type="text"
          onChange={handleChange}
          placeholder="Doe"
          className={`${classes.LocalTextField}`}
          value={values.lastName || ""}
          error={!!errors.lastName}
          helperText={errors.lastName}
          {...getOverrideProps("lastName")}
        />
      )}


      {props.showFields.email && (
        <TextField
          onChange={handleChange}
          id="email"
          upperlabel="Email"
          name="email"
          variant="outlined"
          type="email"
          placeholder="john@doe.com"
          className={`${classes.LocalTextField}`}
          value={values.email || ""}
          error={!!errors.email}
          helperText={errors.email}
          {...getOverrideProps("email")}
        />
      )}

      {props.showFields.repeatEmail && (
        <TextField 
          id="repeat-email" 
          upperlabel="Repeat Email" 
          name="repeat-email"
          variant="outlined" 
          type="email"
          placeholder="john@doe.com"
          className={`${classes.LocalTextField}`}
          value={values.repeatEmail || ""}
          error={!!errors.repeatEmail}
          helperText={errors.repeatEmail}
          {...getOverrideProps("repeatEmail")}
        />
      )}

      {props.showFields.phoneNumber && (
        <PhoneNumberTextField
          onChange={handleChange}
          id="phoneNumber"
          name="phoneNumber"
          type="string"
          upperlabel="Phone Number"
          variant="outlined"
          placeholder="(555) 555-5555"
          className={`${classes.LocalTextField}`}
          value={values.phoneNumber || ""}
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber}
          {...getOverrideProps("phoneNumber")}
        />
      )}

      {props.showFields.zipcode && (
        <TextField
          onChange={handleChange}
          id="zipcode"
          name="zipcode"
          upperlabel="Zipcode"
          variant="outlined"
          type="text"
          placeholder="55555"
          className={`${classes.LocalTextField}`}
          value={values.zipcode || ""}
          error={!!errors.zipcode}
          helperText={errors.zipcode}
          {...getOverrideProps("zipcode")}
        />
      )}

      {props.showFields.password && (
        <TextField
          onChange={handleChange}
          id="password"
          upperlabel="Password"
          name="password"
          variant="outlined"
          type="password"
          placeholder="●●●●●●●"
          className={`${classes.LocalTextField}`}
          value={values.password || ""}
          error={!!errors.password}
          helperText={errors.password}
          {...getOverrideProps("zipcode")}
        />
      )}
    </div>
  );
};

export default BasicInfoForm;
