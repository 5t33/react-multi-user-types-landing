import React from 'react';
import { 
  Theme, Typography, Radio, RadioGroup, RadioProps,
  FormControlLabel,  FormControl
} from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';
// import withWidth, {  WithWidth } from '@material-ui/core/withWidth';
import { 
  SignUpDispatch, useSignUpDispatch, SignUpActionTypeEnum
} from 'Components/SignUp/SignUpContext';
import ActionButton from 'Components/Buttons/ActionButton';
import { UserTypes } from 'Types';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  RadioGroup: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '1rem',
    '& .MuiIconButton-Label': {
      '&:focus': {
        background: 'transparent'
      },
      '&:hover': {
        background: 'transparent'
      }
    },
    '& .MuiFormControlLabel-root': {
      marginRight: 0,
      marginLeft: 0,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '200px'
    },
   
  },
  RadioButton: {
    '&:hover': {
      backgroundColor: 'transparent !important',
      cursor: 'pointer'
    },
    '&:focus': {
      background: 'transparent !important'
    },
    [theme.breakpoints.down('xs')]: {
      padding:'6px',
      '& .MuiSvgIcon-root': {
        height: '.8rem',
        width: '.8rem'
      },
    },
  },
  NextButton: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth:'180px',                  
    },
    [theme.breakpoints.down('sm')]: {
      padding: '.5rem 2rem',   
    },
  },
  FormControlLabel: {
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '.8rem'
    }
  }
  
}));

const StyledRadio: React.ComponentType<RadioProps> = (props) => {

  const classes = useStyles();

  return (
    <Radio
    className={classes.RadioButton} 
    color="primary"
    disableRipple={true}
    size="medium"
    {...props}
    />
  )
}


export type InitialSignUpProps = {};

const InitialSignUp: React.FC<InitialSignUpProps> = (props: InitialSignUpProps) => {
  const classes = useStyles();
  const signUpDispatch: SignUpDispatch  = useSignUpDispatch();
  const [ value, setValue ] = React.useState(UserTypes.Artist);

  const handleClick = () => {
    signUpDispatch({ type: SignUpActionTypeEnum.SET_USER_TYPE, payload: value});
    signUpDispatch({ type: SignUpActionTypeEnum.INCREMENT_STEP});
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(UserTypes[(event.target as HTMLInputElement).value]);
  };

  return (
   
    <div className={classes.root}>
      <ActionButton className={classes.NextButton} onClick={handleClick }> <Typography >Next</Typography></ActionButton>
      <FormControl component="fieldset" >
        <RadioGroup className={classes.RadioGroup} aria-label="gender" name="gender" value={value} onChange={handleChange}>
          <FormControlLabel 
            value={UserTypes.Artist} 
            control={<StyledRadio />} 
            label={<Typography className={classes.FormControlLabel}>Artist</Typography>}
          />
          <FormControlLabel 
            value={UserTypes.Venue} 
            control={<StyledRadio />} 
            label={<Typography className={classes.FormControlLabel}>Venue</Typography>} />
          <FormControlLabel 
            value={UserTypes.Fan} 
            control={<StyledRadio />} 
            label={<Typography className={classes.FormControlLabel}>Fan</Typography>} />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default InitialSignUp;