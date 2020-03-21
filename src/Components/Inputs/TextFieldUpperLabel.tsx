import React from "react";
import {
  TextField,
  Typography,
  OutlinedTextFieldProps,
  Theme
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    "&label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {},
    "& .MuiInputBase-input": {
      [theme.breakpoints.down("xs")]: {
        padding: "12px 10px"
      }
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "15px",
      backgroundColor: "#e6e6e6",
      "& fieldset": {
        border: "none"
      },
      "&:hover fieldset": {},
      "&.Mui-focused fieldset": {
        border: "none"
      },
      "&.Mui-error": {
        borderWidth: "1px",
        borderColor: theme.palette.error.main,
        borderStyle: "solid"
      }
    },
    "& .UpperLabel": {
      marginLeft: ".5rem",
      fontSize: "1rem"
    }
  }
}));

export type FieldWithLabelProps = {
  upperlabel: string;
} & OutlinedTextFieldProps;

const FieldWithLabel: React.FC<FieldWithLabelProps> = (
  props: FieldWithLabelProps
) => {
  const { upperlabel, className } = props;
  const { root } = useStyles();
  return (
    <div className={`${root} ${className}`}>
      <Typography className={"UpperLabel"}>{upperlabel}</Typography>
      <TextField {...props} />
    </div>
  );
};

export default FieldWithLabel;
