import React from "react";
import "./App.css";
// import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { ThemeProvider } from "@material-ui/core/styles";
import { defaultTheme } from "./Theme";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import SignUpModal from "./Components/SignUp/SignUpModal";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faCheck, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes, faCheck, faBars);

const AboutWithRef = React.forwardRef<HTMLDivElement>(AboutPage);

const App: React.FC = () => {
  const aboutRef = React.createRef<HTMLDivElement>();
  const topRef = React.createRef<HTMLDivElement>();

  const [isOpen, setOpen] = React.useState(false);

  const signUpClick = () => {
    setOpen(true);
  };
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <NavBar aboutRef={aboutRef} topRef={topRef} signUpClick={signUpClick} />
        <SignUpModal isOpen={isOpen} setOpen={setOpen} />
        <LandingPage
          aboutRef={aboutRef}
          topRef={topRef}
          signUpClick={signUpClick}
        />
        <AboutWithRef ref={aboutRef} />
      </ThemeProvider>
    </div>
  );
};

export default App;
