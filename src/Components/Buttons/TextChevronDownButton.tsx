import React from "react";
import { Typography, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DownArrow from "assets/icons/down-arrow.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    // zIndex: 1300,
    position: "relative",
    alignSelf: "center",
    cursor: "pointer",
    "& p": {
      color: "white",
      display: "inline-block",
      marginRight: ".625rem",
      textShadow: "1px 1px 3px #8D8D8D",
      flexGrow: 1,
      fontWeight: "bold"
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1rem",
      "& p": {
        fontSize: "1.25rem"
      }
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "2rem",
      "& p": {
        fontSize: "2rem"
      }
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "3rem",
      "& p": {
        fontSize: "3rem"
      }
    },
    "& img": {
      position: "absolute",
      right: "-30px",
      top: "18px",
      [theme.breakpoints.down("xs")]: {
        right: "-18px",
        top: "9px",
        height: "14px"
      },
      [theme.breakpoints.up("sm")]: {
        height: "22px",
        top: "14px"
      },
      [theme.breakpoints.up("lg")]: {
        top: "15px",
        height: "23px"
      },
      [theme.breakpoints.up("xl")]: {
        top: "24px",
        right: "-40px",
        height: "28px"
      }
    }
  }
}));

export type TextChevronDownButtonProps = {
  text: string;
  onClick?: () => void;
};

const TextChevronDownButton: React.FC<TextChevronDownButtonProps> = (
  props: TextChevronDownButtonProps
) => {
  const classes = useStyles({});
  return (
    <div className={classes.root} onClick={props.onClick}>
      <Typography> {props.text} </Typography>
      <img src={DownArrow} />
    </div>
  );
};

export default TextChevronDownButton;
