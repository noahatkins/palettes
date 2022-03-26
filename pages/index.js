import styles from "../styles/Home.module.css";
import {useState, useEffect, useContext} from "react";
import {ThemeContext} from "../contexts/ThemeStore";
import Thumbnail from "../components/Thumbnail/Thumbnail";
import PageHead from "../components/Head/PageHead";

export default function Home() {
  const {theme, switchTheme} = useContext(ThemeContext);
  return (
    <div className="homeWrap">
      <PageHead title="Hue Hub" />
      <div className="homeHeader">
        <h1 className={styles.title}>Hue Hub — Find Your True Colours</h1>
        <div>
          <label className="switch">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={() => {
                if (theme === "light") {
                  switchTheme("dark");
                  localStorage.setItem("theme", "dark");
                } else {
                  switchTheme("light");
                  localStorage.setItem("theme", "light");
                }
              }}
            />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="thumbnailGrid">
        <Thumbnail path="/palette/red" title="Red" color="red" />
        <Thumbnail path="/palette/yellow" title="Yellow/Orange" color="yellow" />
        <Thumbnail path="/palette/green" title="Green" color="green" />
        <Thumbnail path="/palette/blue" title="Blue" color="blue" />
        <Thumbnail path="/palette/pink" title="Pink" color="pink" />
        <Thumbnail path="/palette/purple" title="Purple" color="purple" />
        <Thumbnail path="/palette/grey" title="Grey" color="grey" />
        <Thumbnail path="/palette/black" title="Black" color="black" />
      </div>
      <div className="homeFooter">
        <span>© {new Date().getFullYear()} Hue Hub</span>
      </div>
    </div>
  );
}
