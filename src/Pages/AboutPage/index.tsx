import React from 'react';
import { Typography, Theme, Card} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CoverImage from '../../assets/images/austin-neill-1t0yY9lSpyE-unsplash.jpg'
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
    height: '100vh',
    backgroundColor: '#E1E1E1',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      height: '120vh'
    },
    [theme.breakpoints.down('md')]: {
      alignItems: 'center',
    },
  },
  CoverImageStyles: {
    backgroundPosition: 'center',
    position: 'absolute',
    height: '110vh',
    minWidth: '100vw',
    left:'0',
    top:'0',
    [theme.breakpoints.down('xs')]: {
      height: '120vh'
    },
  },
  CoverImageOverLay: {
    top:'0',
    backgroundPosition: 'center',
    position: 'absolute', 
    // background: 'linear-gradient(to right,rgba(255,0,0,0) 0%, #e1e1e1 80%)',/*'linear-gradient(to left, #000, #000 10%, #e1e1e1 75%, #e1e1e1 75%)'*/
    width:'100vw',
    height: '100vh',
    zIndex: 100,
    [theme.breakpoints.down('xs')]: {
      height: '120vh'
    },
  },
  ContentContainer: {
    zIndex:1000,
    paddingBottom:'2rem',
    position: 'relative',
    maxWidth: '650px',
    display: 'flex',
    flexFlow: 'column',
    textAlign:'left',
    // marginTop: '2rem',
    marginRight: '2rem',
    marginLeft: '2rem',
    '& p': {
      position: 'relative',
      color: 'gray'
    },
    '& > *': {
      // textShadow: '1px 1px 3px #8D8D8D'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1rem',
    },
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {

    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '800px',

    },
    [theme.breakpoints.up('lg')]: {

    },
  },
  CopyCard: {
    backgroundColor: 'rgba(255,255,255,.9)'
  },
  Title: {
    paddingTop: '1rem',
    paddingLeft: '2rem',
    paddingRight: '1rem',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1rem',
      fontSize: '1.5rem',


    },
    [theme.breakpoints.up('xs')]: {

    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',

      marginBottom: '2rem',
    },
    [theme.breakpoints.up('md')]: {

    },
    [theme.breakpoints.up('lg')]: {

    },
  },
  Copy: {
    // fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.625rem',
    },
    // [theme.breakpoints.up('xs')]: {
    //   fontSize: '1rem',

    // },
    [theme.breakpoints.up('sm')]: {
      // fontSize: '1.25rem',
      fontSize: '1rem',

    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.25rem',
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
    },
  }
}));

// currently exporting an empty proptype for consistency
export type AboutPageProps = {} & { children?: React.ReactNode; };

const AboutPage: React.FC = (props, ref: React.RefObject<HTMLDivElement>) => {
  const classes = useStyles();

  return(
    <div className={classes.root} ref={ref}>
      <img src={CoverImage} className={classes.CoverImageStyles}/>
      <div className={classes.CoverImageOverLay}/>
      <div className={classes.ContentContainer}>
        <Card className={classes.CopyCard}>
        <Typography className={classes.Title}>
          About Us
        </Typography>
        <Typography className={classes.Copy}>
        {"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Pellentesque lorem nibh, eleifend eu fermentum at, gravida ac libero.\
        Aliquam sollicitudin justo neque, in elementum nulla pretium sed.\
        Phasellus varius, nisl non vulputate facilisis, lacus ligula lobortis augue,\
        id feugiat enim felis id dui. Morbi rutrum fringilla tortor,et consequat nibh\
        aliquet sit amet."}
        </Typography>
        <Typography className={classes.Copy}>
        {"Ut a nibh porttitor, tincidunt ligula vel, ornare dolor. Donec accumsan arcu orci,\
         nec imperdiet lacus varius facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.\
        Aliquam vestibulum diam mi, eu ullamcorper ante fringilla ac. In commodo sit amet metus id auctor.\
         Suspendisse bibendum non metus ac rhoncus. Vivamus malesuada id leo et pharetra."}
        </Typography>
        </Card>
      </div>
    </div>
  )
}

export default AboutPage;
