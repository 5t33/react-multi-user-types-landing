import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from 'Components/Inputs/TextFieldUpperLabel';
import { FormikErrors } from 'formik';

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
     // flexGrow: 1,
     flex: '1 80%',
     margin: '.5rem',
     justifySelf: 'left',
     [theme.breakpoints.down('xs')]: {
      margin: '.25rem'                
    },
  },
  Title: {
    flexBasis:'100%',
    textAlign: 'center',
    marginBottom: '1rem',
    fontSize: '2rem',
    color: '#333333'
  },
  LocalNavigation: {
    width: '100%',
    padding: '0 1rem'
  }
}));

export type AddressData = {
  city?: string,
  state?: string,
  zipcode?: number,
  address1?: string,
  address2?: string,
}


export type AddressFormProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  values: AddressData,
  errors:  FormikErrors<AddressData>
};

const AddressForm: React.FC<AddressFormProps> = (props:  AddressFormProps) => {
  const classes = useStyles();
  const { handleChange, values, errors,  } = props;
  return (
    <div className={classes.root}>
      <TextField 
        id="address1"
        name="address1"
        type="text"
        upperlabel="Address 1" 
        variant="outlined"
        placeholder="123 Fourth Street"
        onChange={handleChange}
        className={`${classes.LocalTextField}`}
        value={values.address1 || ""}
        error={!!errors.address1}
        helperText={errors.address1}
      />
      <TextField 
        id="address2" 
        name="address2"
        type="text"
        upperlabel="Address 2" 
        variant="outlined"
        placeholder="Apt. 555 (Optional)"
        onChange={handleChange} 
        className={`${classes.LocalTextField}`}
        value={values.address2 || ""}
        error={!!errors.address2}
        helperText={errors.address2}
      />
      <TextField 
        id="city" 
        name="city"
        type="text"
        upperlabel="City" 
        variant="outlined"
        placeholder="New York"
        onChange={handleChange} 
        className={`${classes.LocalTextField}`}
        value={values.city || ""}
        error={!!errors.city}
        helperText={errors.city}
      />
      <TextField 
        id="state" 
        name="state"
        type="text"
        upperlabel="State" 
        variant="outlined" 
        placeholder="New York"
        onChange={handleChange} 
        className={`${classes.LocalTextField}`}
        value={values.state || ""}
        error={!!errors.state}
        helperText={errors.state}
      />
      <TextField 
        id="zipcode" 
        name="zipcode"
        type="text"
        upperlabel="Zipcode" 
        variant="outlined" 
        placeholder="55555"
        onChange={handleChange} 
        className={`${classes.LocalTextField}`}
        value={values.zipcode || ""}
        error={!!errors.zipcode}
        helperText={errors.zipcode}
      />
    </div>
  );
}

export default AddressForm;