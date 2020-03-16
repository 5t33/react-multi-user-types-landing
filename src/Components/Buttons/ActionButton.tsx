import React from 'react';
import { Theme, Button, ButtonProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { omit } from 'lodash'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
      minWidth: '200px',
      color: 'white',
      margin:'0 10px',
      backgroundColor: theme.palette.secondary.main,
      textTransform: 'none',
      fontWeight: 'bold',
      marginTop: '1rem',
      padding: '1rem 4rem',
      whiteSpace: 'nowrap',
      flex: '1 0 45%',
      maxWidth: '250px',
      '&:hover': {
        backgroundColor: theme.palette.secondary.main,
        cursor: 'pointer'
      },
      '& p': {
        fontWeight: 'bold',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '.5rem 2rem',   
        '& p': {
          fontSize:'.875rem',  
        }                            
      },
      [theme.breakpoints.up('xs')]: {
        padding: '.5rem 2rem',   
        '& p': {
          fontSize:'1rem',  
        }                            
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: '300px',

        '& p': {
          fontSize:'1.5rem',   
        }                          
      },
      [theme.breakpoints.up('xl')]: {

        '& p': {
          fontSize: '2rem',  
        }
      },
    }
  
}));

export type ActionButtonProps = {
} & ButtonProps;

const ActionButton: React.FC<ActionButtonProps> = (props: ActionButtonProps) => {
  const classes = useStyles();
  return (
      <Button className={ `${props.className} ${classes.root}`}{...omit(props, 'className')}/>
  );
}

export default ActionButton;