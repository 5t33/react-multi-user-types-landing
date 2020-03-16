import React from 'react';
import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex'
  },
}))

export type BoilerPlateProps = {};


const BoilerPlate: React.FC<BoilerPlateProps> = (props: BoilerPlateProps) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      
    </div>
  );
}

export default BoilerPlate;