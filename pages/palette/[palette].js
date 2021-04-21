import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import getPalette from "../../components/Thumbnail/GetPalette";
import PageHead from "../../components/Head/PageHead";
import {MdKeyboardArrowDown, MdKeyboardArrowUp} from "react-icons/md";

export default function Palette() {
  const r = useRouter(null);
  const url = r.query;
  const [color, setColor] = useState("");
  const [colorType, setColorType] = useState("HEX");
  const [formatMenu, showFormat] = useState(false);
  const [palette, setPalette] = useState([]);
  const [visible, setVisible] = useState("hidden");

  useEffect(() => {
    const pal = getPalette(url.palette);
    if (url.palette) {
      if (pal === "404") {
        return r.push("/404");
      } else {
        setPalette(pal);
      }
    }
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
      {formatMenu && (
        <div className="formatMenu">
          <div
            onClick={() => {
              showFormat(false);
              setColorType("HEX");
            }}>
            HEX — #FFFFFF
          </div>
          <div
            onClick={() => {
              showFormat(false);
              setColorType("RGB");
            }}>
            RGB — (256, 256, 256)
          </div>
        </div>
      )}
      <div id={visible} className="copyMenu" style={{background: color}}>
        <h1 className="menuText">COPIED {color}!</h1>
      </div>
      <div className="paletteHeader">
        <div>
          <h4 onClick={() => r.push("/")} className="backButton">
            Back
          </h4>
        </div>
        <div className="palleteHeaderMid" style={{display: "flex", justifyContent: "center"}}>
          <span className="formatSelect" onClick={() => showFormat(!formatMenu)}>
            {colorType} {colorType === "HEX" ? " — #FFFFFF" : " — (256, 256, 256)"}{" "}
            {formatMenu ? <MdKeyboardArrowUp id="icon" /> : <MdKeyboardArrowDown id="icon" />}
          </span>
        </div>
        <div className="paletteTitle">
          <h2>{url.palette && `${url.palette.charAt(0).toUpperCase() + url.palette.slice(1)} Palette`} </h2>
        </div>
      </div>
      <div className="palette">
        <div className="paletteRow">
          {palette.map((pal, key = pal.color) => (
            <span
              id={key}
              key={key}
              style={{background: pal.color}}
              onClick={(e) => {
                if (colorType === "HEX") {
                  setColor(pal.color);
                } else {
                  setColor(document.getElementById(key).style.backgroundColor);
                }
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
