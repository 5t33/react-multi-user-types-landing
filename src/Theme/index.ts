import { ThemeOptions } from "@material-ui/core/styles/createMuiTheme";
import { createMuiTheme, Theme } from "@material-ui/core/styles";

const defaultOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#333",
      dark: "#333",
      light: "#fff"
    },
    secondary: {
      main: "#FF5A5F"
    }
  },
  typography: {},
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
};

export const defaultTheme: Theme = createMuiTheme(defaultOptions);
