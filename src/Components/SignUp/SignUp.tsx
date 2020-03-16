import React from 'react';
import get from 'lodash/fp/get'  
import { Theme, Typography } from '@material-ui/core';
import NavButton from 'Components/Buttons/NavButton';
import { makeStyles } from '@material-ui/core/styles';
import { 
  SignUpStateType, useSignUpState, SignUpDispatch, useSignUpDispatch,
  SignUpActionTypeEnum, SignUpStepEnum
} from 'Components/SignUp/SignUpContext';
import IntitialSignUp from 'Components/SignUp/InitialSignUp';
import PersonSignUp from 'Components/SignUp/PersonSignUp';
import VenueSignUp from 'Components/SignUp/VenueSignUp';
import SignUpSuccess from 'Components/SignUp/SignUpSuccess';
import { UserTypes } from 'Types';


const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    flexDirection:'column',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1rem'
  },
  Title: {
    flexBasis:'100%',
    textAlign: 'center',
    marginBottom: '1rem',
    marginTop: '1rem',
    fontSize: '2rem',
    color: '#333333',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.25rem',
      marginTop: '.5rem',
    }
  },
  LocalNavButton: {
    position: 'absolute',
    top: '1rem',
    left: '1rem',
    [theme.breakpoints.down('xs')]: {
      top: '.5rem',
      left: '.5rem',
    }
  }
}));

export type  SignUpFormProps = {};


const SignUpForm: React.FC<SignUpFormProps> = (props: SignUpFormProps) => {
  const classes = useStyles();
  const signUpState: SignUpStateType = useSignUpState();
  const signUpDispatch: SignUpDispatch  = useSignUpDispatch();

  const navBack = () => signUpDispatch({type: SignUpActionTypeEnum.DECREMENT_STEP})

  const isPerson = signUpState.userType === UserTypes.Artist || signUpState.userType === UserTypes.Fan;
  const isVenue = signUpState.userType === UserTypes.Venue;

  return (
    <div className={classes.root}>
      { signUpState.step === 0 && <IntitialSignUp/> }
      { signUpState.step > 0 && signUpState.step !== SignUpStepEnum.CONFIRMATION_STEP &&
        <>
          <NavButton className={classes.LocalNavButton} direction={"left"} onClick={navBack}/>
          <Typography className={classes.Title}>
            {signUpState.userType}
          </Typography> 
          {
            isPerson && <PersonSignUp initialValues={get([`${signUpState.userType}`, 'basicInfoData'], signUpState) || {}} />
          }
          {
            isVenue && <VenueSignUp />
          }
        </>
      }
      {signUpState.step === SignUpStepEnum.CONFIRMATION_STEP &&
        <SignUpSuccess/>
      }
     </div>
  );
}

export default SignUpForm;