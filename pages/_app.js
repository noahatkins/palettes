import "../styles/globals.css";
import {ThemeProvider} from "styled-components";
import {useState, useEffect} from "react";
import Theme, {lightTheme, darkTheme, GlobalStyles} from "../constants/theme";
import {ThemeStore} from "../contexts/ThemeStore";

function MyApp({Component, pageProps}) {
  // const ThemeContext = React.createContext();

  // const [theme, setTheme] = useState({ThemeContext})
  // const [mode, setMode] = useState({ThemeContext});
  // console.log(theme);
  // useEffect(() => {
  //   const lsTheme = localStorage.getItem("theme");
  //   console.log(lsTheme);
  //   if (lsTheme === "light") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //     localStorage.setItem("theme", "dark");
  //     console.log("dark");
  //   } else {
  //     setTheme("light");
  //     localStorage.setItem("theme", "light");
  //     console.log("light");
  //   }
  // };

  return (
    <ThemeStore>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </ThemeStore>
  );
}

export default MyApp;
