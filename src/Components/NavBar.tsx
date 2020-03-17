import React from 'react';
import { AppBar, Toolbar, Typography, Button, Theme} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {  ClickAwayListener, IconButton, Grow, Paper,
          Popper, MenuItem, MenuList} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { scrollToDiv } from 'Util/helpers'




const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    '& p': {
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '1.5rem',
      [theme.breakpoints.up('lg')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.75rem',
      },
    },
    display: 'flex',
  },
  ToolBarStyles: {
    minHeight: '4rem',
    height: '7vh',
    '& button': {
      fontWeight: 800,
      textTransform: 'none',

      [theme.breakpoints.down('xl')]: {
        fontSize:'1rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '1.5rem',
      },
      padding: '2px 5px',
      '&.MuiButton-root': {
        '&:hover': {
          backgroundColor: '#6d6d6d',
        },
      },
    },
  },
  SignUpButton: {
    borderStyle: 'solid',
    borderWidth: '1px',
    '&.MuiButton-root': {
      '&:hover': {
        backgroundColor: 'none',
      },
    },
  },
  AboutUsButton: {
    marginRight: '1rem'
  },
  MenuButton: {
    [theme.breakpoints.up('md')]: {
      visibility: 'hidden'
    },
  },
  HorizontalMenuContainer: {
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden'
    },
  },
  VertMenu: {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '& .MuiMenuItem-root': {
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#6d6d6d',
      },
    }
  },
  MenuIcon: {
    fontSize: '1.5rem',
  }
}));


export type NavBarProps = {
  aboutRef: React.RefObject<HTMLDivElement>,
  topRef: React.RefObject<HTMLDivElement>,
  signUpClick: () => void,
};


const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { signUpClick } = props;
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  window.addEventListener("resize", () => setOpen(false));

  return (
    <>
      <AppBar>
        <Toolbar className={classes.ToolBarStyles} >
            <div className={classes.title}  onClick={()=>scrollToDiv(props.topRef)} >
              <Typography >
                Band&nbsp;Connect
              </Typography>
            </div>
          <div className={classes.HorizontalMenuContainer}>
              <Button color="inherit" className={classes.AboutUsButton} onClick={()=>scrollToDiv(props.aboutRef)} >
                About Us
              </Button>
           
            <Button color="inherit" className={classes.SignUpButton} onClick={() => signUpClick()}>
              Sign Up
            </Button>
          </div>
          <IconButton 
            edge="start" 
            className={classes.MenuButton} 
            color="inherit" 
            aria-label="menu"
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <FontAwesomeIcon 
              className={classes.MenuIcon} 
              icon="bars"
            />
          </IconButton>
          <Popper 
            open={open} 
            anchorEl={anchorRef.current} 
            role={undefined} 
            transition 
            disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper className={classes.VertMenu}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={(event: React.MouseEvent<EventTarget>) => {
                      scrollToDiv(props.aboutRef)
                      handleClose(event);
                    }}>About Us</MenuItem>
                    <MenuItem onClick={(event: React.MouseEvent<EventTarget>) => {
                      signUpClick();
                      handleClose(event);
                    }}>Sign Up</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default NavBar;