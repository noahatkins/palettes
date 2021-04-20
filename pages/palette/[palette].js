import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import getPalette from "../../components/GetPalette";
import PageHead from "../../components/Head/PageHead";

export default function Palette() {
  const r = useRouter(null);
  const url = r.query;

  const [color, setColor] = useState("");
  const [palette, setPalette] = useState([]);
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    const pal = getPalette(url.palette);
    setPalette(pal);
  }, [url]);

  useEffect(() => {
    if (visible === "visible") {
      setTimeout(function () {
        setVisible("hidden");
      }, 1000);
    }
  }, [visible]);

  useEffect(() => {
    if (color != "") {
      const copyToClipBoard = async (color) => {
        try {
          await navigator.clipboard.writeText(color);
        } catch (err) {}
      };
      copyToClipBoard(color);
    }
  }, [color]);

  if (!palette) {
    return <div></div>;
  }

  return (
    <>
      <PageHead title={url.palette && `${url.palette.charAt(0).toUpperCase() + url.palette.slice(1)} Palette`} />
      <div id={visible} className="copyMenu" style={{background: color}}>
        <h1 className="menuText">COPIED {color}!</h1>
      </div>
      <div className="paletteHeader">
        <div onClick={() => r.push("/")} className="backButton">
          <div id="triangle"></div>
          <div className="back">Back</div>
        </div>
        <>
          <h2>{url.palette && `${url.palette.charAt(0).toUpperCase() + url.palette.slice(1)} Palette`} </h2>
        </>
      </div>
      <div className="palette">
        <div className="paletteRow">
          {palette.map((pal, key) => (
            <span
              key={key}
              style={{background: pal.color}}
              onClick={() => {
                setColor(pal.color);
                setVisible("visible");
              }}>
              <button className="copySpan">Copy</button>
              <div className="colorName">{pal.name}</div>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
