import React, {useState, useEffect} from "react";

const ThemeContext = React.createContext();

const ThemeStore = ({children}) => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    if (lsTheme === "light") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }, []);
  const switchTheme = (theme) => setTheme(theme);

  return <ThemeContext.Provider value={{switchTheme, theme}}>{children}</ThemeContext.Provider>;
};

export {ThemeStore, ThemeContext};
