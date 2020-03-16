import React from 'react';
import { Theme, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& p': {
      fontSize: '3rem',
      color: '#333333',
      [theme.breakpoints.down('sm')]: {
       fontSize: '1.5rem',
      },
    }
  },
  Title: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    margin: '0 1rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0 .25rem',
    },
  },
  CheckIcon: {
    color: "green",
    fontSize: '5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  }
}))

export type SignUpSuccessProps = {};


const SignUpSuccess: React.FC<SignUpSuccessProps> = (props:SignUpSuccessProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      <Typography className={classes.Title}>
        Success!
      </Typography>
       <FontAwesomeIcon 
          className={classes.CheckIcon}
          icon="check"
        />
       <Typography className={classes.Title}>
       You've been signed up!
      </Typography>
    </div>
  );
}

export default SignUpSuccess;