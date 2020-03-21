import React from "react";
import { Theme, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LeftArrow from "assets/icons/left-arrow-alt-solid-orange.svg";
import RightArrow from "assets/icons/right-arrow-alt-solid-orange.svg";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between"
  },
  ButtonLeft: {
    justifySelf: "left"
  },
  ButtonRight: {
    justifySelf: "right"
  },
  NavButton: {
    minWidth: "0px",
    textTransform: "none",
    fontWeight: "bold",
    "& img": {
      height: "25px"
    },
    "&:hover": {
      backgroundColor: "transparent"
    },
    padding: ".25rem",
    whiteSpace: "nowrap"
  }
}));

// Using '& React.HTMLAttributes<HTMLDivElement>;' to access className prop
export type NavButtonProps = {
  onClick: () => void;
  direction: "left" | "right";
} & React.HTMLAttributes<HTMLDivElement>;

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
  const { className, onClick, direction } = props;
  const classes = useStyles();

  return (
    <div className={`${classes.root} ${className}`}>
      <Button
        className={`${classes.NavButton} ${
          direction === "left" ? classes.ButtonLeft : classes.ButtonRight
        }`}
        onClick={() => onClick()}
        disableFocusRipple={true}
        disableRipple={true}
      >
      {direction === "left" && <img src={LeftArrow} />}
      {direction === "right" && <img src={RightArrow} />}
      </Button>
    </div>
  );
};

export default NavButton;
