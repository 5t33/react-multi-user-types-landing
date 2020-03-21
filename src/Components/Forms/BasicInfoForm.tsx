import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { UserTypes, UserType} from 'Types';
import TextField from 'Components/Inputs/TextFieldUpperLabel';
import { UnknownUserTypeError } from 'Util/Errors';
import { FormikErrors } from 'formik';
import PhoneNumberTextField from 'Components/Inputs/PhoneNumberTextField';

export type BasicInfoData = {
  email?: string,
  phoneNumber?: string,
  name?: string,
  venueName?: string,
  password?: string,
  zipcode?: string,
  submitWorked?: Promise<boolean>
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'wrap',
    justifyContent: 'center',
    '& #username': {
      flexBasis: '100%',
    },
  },
  LocalTextField: {
    flex: '1 80%',
    margin: '.5rem',
    justifySelf: 'left',
    [theme.breakpoints.down('xs')]: {
      margin: '.25rem'                
    },
  },

}));

export type BasicInfoFormProps = {
  userType: UserType,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  values: BasicInfoData,
  errors:  FormikErrors<BasicInfoData>
}

const BasicInfoForm: React.FC<BasicInfoFormProps> = (props:  BasicInfoFormProps) => {
  const classes = useStyles();
  const { userType, handleChange, values, errors } = props;
  const isPerson = userType === UserTypes.Artist || userType === UserTypes.Fan;
  const isVenue = userType === UserTypes.Venue;

  const throwUnknownUserTypeError = (unknownUserType: string) => {throw new Error(UnknownUserTypeError(unknownUserType))}

  return (
    <div className={classes.root}>
      {!isPerson && !isVenue && throwUnknownUserTypeError(userType)}

      {
        isPerson && 
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
        />     
      }
        
      {
        isVenue && 
        <TextField 
          id="venueName" 
          name="venueName" 
          upperlabel="Venue Name" 
          variant="outlined" 
          type="text" 
          onChange={handleChange} 
          placeholder="Your Business"
          className={`${classes.LocalTextField}`}
          value={values.venueName  || ""}
          error={!!errors.venueName}
          helperText={errors.venueName}
        />
      }
      
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
      />
      {/* <TextField id="repeat-email-input" upperlabel="Repeat Email" variant="outlined" className={`${classes.LocalTextField}`}/> */}

      {
        isVenue && 

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
        />

      }

      {
        isPerson && 
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
        />
      }
      
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
      />
    </div>

  );
}

export default BasicInfoForm;