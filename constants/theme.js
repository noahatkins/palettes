import React, {useContext} from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {ThemeContext} from "../contexts/ThemeStore";

export const themes = {
  light: {
    primary: "#f7f1e3",
    secondary: "#1e272e",
  },
  dark: {primary: "#1e272e", secondary: "#f7f1e3"},
};

const GlobalStyle = createGlobalStyle`
  body {
    --primary:  ${({theme}) => theme.primary};
    --secondary: ${({theme}) => theme.secondary};
  }`;

const Theme = ({children}) => {
  const {theme} = useContext(ThemeContext);
  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Theme;
