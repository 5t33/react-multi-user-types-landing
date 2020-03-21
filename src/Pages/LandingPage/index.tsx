import React from "react";
import { Typography, Theme } from "@material-ui/core";
import ActionButton from "Components/Buttons/ActionButton";
import { makeStyles } from "@material-ui/core/styles";
import CoverImage from "assets/images/alexander-popov-hTv8aaPziOQ-unsplash.jpg";
// import DownArrow from 'assets/icons/down-arrow.svg'
// import ScrollToRefButton from 'Components/Buttons/ScrollToRefButton';
import TextChevronDownButton from "Components/Buttons/TextChevronDownButton";
import { scrollToDiv } from "Util/helpers";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#E1E1E1"
  },
  LandingPageContainer: {
    height: "100vh",
    overflow: "hidden",
    position: "relative",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  CoverImageStyles: {
    backgroundPosition: "center",
    minHeight: "160vh",
    position: "absolute",
    left: "0vw",
    top: "-60vh"
  },
  CoverImageOverLay: {
    backgroundPosition: "center",
    top: 0,
    position: "absolute",
    width: "100vw",
    height: "100vh",
    zIndex: 100
  },
  ContentContainer: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    color: "white",
    height: "100vh",
    maxWidth: "700px",
    position: "relative",
    margin: "0 5vw",
    zIndex: 1000,
    [theme.breakpoints.down("xs")]: {
      marginTop: "1.5rem"
    },
    [theme.breakpoints.up("xl")]: {
      justifyContent: "center",
      maxWidth: "800px"
    }
  },
  CopyContainer: {
    position: "relative",
    zIndex: 1300,
    "& > *": {
      fontWeight: "bold"
    },
    "& p": {
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25rem"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "2.5rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "3rem"
      }
    }
  },
  JoinButtonsContainer: {
    position: "relative",
    display: "flex",
    flexFlow: "wrap",
    zIndex: 1300,
    justifyContent: "center"
  },
  JoinButton: {
    minWidth: "250px"
  },
  AboutPageContainer: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "red"
  },
  title: {
    display: "flex",
    flex: "none",
    margin: 0,
    padding: 0,
    "& p": {
      flexGrow: 1,
      fontWeight: "bold",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem"
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "2.5rem"
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "3rem"
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: "3.5rem"
      }
    }
  },
  LearnMoreContainer: {
    position: "relative",
    alignSelf: "center",
    cursor: "pointer",
    "& p": {
      color: "white",
      display: "inline-block",
      marginRight: ".625rem",
      flexGrow: 1,
      fontWeight: "bold"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      "& p": {
        fontSize: "2rem"
      }
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
      "& p": {
        fontSize: "2rem"
      }
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "5rem",
      "& p": {
        fontSize: "3rem"
      }
    },
    "& img": {
      [theme.breakpoints.down("lg")]: {
        height: "18px"
      },
      [theme.breakpoints.up("lg")]: {
        height: "23px"
      },
      [theme.breakpoints.up("xl")]: {
        height: "28px"
      }
    }
  }
}));

export type LandingPageProps = {
  signUpClick: () => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  topRef: React.RefObject<HTMLDivElement>;
} & { children?: React.ReactNode };

const LandingPage: React.FC<LandingPageProps> = (props: LandingPageProps) => {
  const classes = useStyles();
  const { aboutRef, topRef, signUpClick } = props;
  return (
    <div className={classes.root} ref={topRef}>
      <div className={classes.LandingPageContainer}>
        <img src={CoverImage} className={classes.CoverImageStyles}></img>
        <div className={classes.CoverImageOverLay} />
        <div className={classes.ContentContainer}>
          <div className={classes.CopyContainer}>
            <div className={classes.title}>
              <Typography id={"title"}>{"Band Connect"}</Typography>
            </div>

            <Typography>
              {"The only place for bands to connect with venues and fans."}
            </Typography>
          </div>
          <div className={classes.JoinButtonsContainer}>
            <ActionButton className={classes.JoinButton} onClick={signUpClick}>
              <Typography>Create Account</Typography>
            </ActionButton>
          </div>
          <TextChevronDownButton
            text="Learn More"
            onClick={() => scrollToDiv(aboutRef)}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
