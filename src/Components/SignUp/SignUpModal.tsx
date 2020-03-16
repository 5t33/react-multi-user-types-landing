import React from 'react';
import { Modal, Card, IconButton } from '@material-ui/core';
import { makeStyles, Theme} from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SignUpProvider }from 'Components/SignUp/SignUpContext';
import SignUp from 'Components/SignUp/SignUp';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
  },
  modal: {
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SignUpContainer: {
    position: 'relative',
    minHeight: '60vh',
    maxHeight: '95vh',
    width: '70vw',
    display: 'flex',
    flexFlow: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F4F4',
    border: 'none',
    outline: 'none',
    overflowY: 'scroll'
  },
  CloseButton: {
    '&:hover': {
      cursor: 'pointer'
    },
    zIndex: 1300,
    color: '#868686',
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    fontSize: '1.25rem',
    [theme.breakpoints.down('xs')]: {
      top: '.5rem',
      right: '.5rem',
      fontSize: '1rem',
    }
  }
}));

export type SignUpModalProps = {
  isOpen: boolean,
  setOpen: (val: boolean) => void;
}

const SignUpModal: React.FC<SignUpModalProps> = (props: SignUpModalProps) => {
  const { isOpen, setOpen } = props;
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Modal
        className={classes.modal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={isOpen}
        onClose={() => setOpen(false)}
        disableBackdropClick={true}
      >
        <Card className={classes.SignUpContainer}>
          <IconButton   className={classes.CloseButton}  onClick={() => {setOpen(false)}}>
            <FontAwesomeIcon 
              icon="times"
            />
          </IconButton>
          <SignUpProvider>
            <SignUp/>
          </SignUpProvider>
        </Card>
      </Modal>
    </div>
  );
};

export default SignUpModal;