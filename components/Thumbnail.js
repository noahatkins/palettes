import {Router} from "next/router";
import React from "react";
import styles from "../styles/Home.module.css";
import {useRouter} from "next/router";
import getPalette from "./GetPalette";

export default function Thumbnail({path, title, color}) {
  const router = useRouter();
  const colors = getPalette(color);

  return (
    <div className="thumbnail" onClick={() => router.push(path)}>
      <div className="row">
        {colors.slice(0, 3).map((col, key) => (
          <span
            key={key}
            style={{
              background: col.color,
            }}></span>
        ))}
      </div>
      <div className="row">
        {colors.slice(3, 6).map((col, key) => (
          <span
            key={key}
            style={{
              background: col.color,
            }}></span>
        ))}
      </div>
      <div className="row">
        {colors.slice(6, 9).map((col, key) => (
          <span
            key={key}
            style={{
              background: col.color,
            }}></span>
        ))}
      </div>

      <h3>{title}</h3>
    </div>
  );
}
