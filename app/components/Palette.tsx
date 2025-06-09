"use client";

import React, {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import getPalette from "@/app/components/GetPalette";
import {IoArrowBack, IoCopy, IoCheckmark} from "react-icons/io5";
import {ChevronDown} from "lucide-react";

interface PaletteProps {
  paletteUrl: string;
}

export default function Palette({paletteUrl}: PaletteProps) {
  const router = useRouter();
  const [color, setColor] = useState("");
  const [colorType, setColorType] = useState("HEX");
  const [formatMenu, showFormat] = useState(false);
  const [palette, setPalette] = useState<any[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [resolvedUrl, setResolvedUrl] = useState<string>("");

  useEffect(() => {
    setResolvedUrl(paletteUrl);
    const pal = getPalette(paletteUrl);
    if (paletteUrl) {
      if (pal === "404") {
        return router.push("/404");
      } else {
        setPalette(pal);
      }
    }
  }, [paletteUrl, router]);

  useEffect(() => {
    if (copiedIndex !== null) {
      setTimeout(() => {
        setCopiedIndex(null);
      }, 1000);
    }
  }, [copiedIndex]);

  const handleCopyColor = async (color: string, index: number) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedIndex(index);
    } catch (err) {
      console.error("Failed to copy color:", err);
    }
  };

  if (!palette) {
    return <div></div>;
  }

  return (
    <>
      <div className="min-h-[10vh] max-h-[10vh] flex items-center glass-effect bg-background/30 px-3 sm:px-5 border-b border-border/50 z-[150]">
        <div className="w-fit">
          <button onClick={() => router.push("/")} className="text-[24px] sm:text-[28px] hover:opacity-80 hover:scale-[1.02] transition-all duration-200 ease-in-out p-1.5 sm:p-2 rounded-full hover:bg-foreground/10">
            <IoArrowBack size={24} className="sm:w-7 sm:h-7" />
          </button>
        </div>
        <div className="flex-1 flex justify-center relative z-[150]">
          <button onClick={() => showFormat(!formatMenu)} className="w-[280px] sm:w-[300px] flex justify-between items-center glass-effect bg-background/30 px-4 sm:px-8 py-1.5 sm:py-2 transition-all duration-100 ease-in-out rounded-lg text-[16px] sm:text-[20px] border border-border/50">
            <span>{colorType === "HEX" ? "HEX — #FFFFFF" : "RGB — (256, 256, 256)"}</span>
            <ChevronDown className={`ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${formatMenu ? "rotate-180" : ""}`} />
          </button>

          {formatMenu && (
            <div className="absolute top-full left-0 right-0 glass-effect bg-background/30 text-foreground transition-all duration-200 ease-in-out cursor-pointer text-[16px] sm:text-[20px] border border-border/50 rounded-lg mt-2 overflow-hidden">
              <button
                className="w-full px-4 sm:px-8 py-2 sm:py-3 text-left hover:bg-foreground/10 transition-colors"
                onClick={() => {
                  showFormat(false);
                  setColorType("HEX");
                }}
              >
                HEX — #FFFFFF
              </button>
              <button
                className="w-full px-4 sm:px-8 py-2 sm:py-3 text-left hover:bg-foreground/10 transition-colors"
                onClick={() => {
                  showFormat(false);
                  setColorType("RGB");
                }}
              >
                RGB — (256, 256, 256)
              </button>
            </div>
          )}
        </div>
        <div className="w-fit hidden sm:flex justify-end">
          <h2 className="text-[24px] font-medium">{resolvedUrl && `${resolvedUrl.charAt(0).toUpperCase() + resolvedUrl.slice(1)} Palette`}</h2>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 cursor-pointer z-[10]">
        {palette.map((pal, key) => (
          <span
            id={key.toString()}
            key={key}
            className="transition-all duration-200 ease-in-out min-h-[35vh] sm:min-h-[30vh] relative group z-[10]"
            style={{background: pal.color}}
            onClick={() => {
              const colorValue = colorType === "HEX" ? pal.color : document.getElementById(key.toString())?.style.backgroundColor || "";
              handleCopyColor(colorValue, key);
            }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              {copiedIndex === key ? (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-[#f7f1e3]">
                  <IoCheckmark size={20} className="sm:w-6 sm:h-6" />
                  <span className="text-[14px] sm:text-base">Copied!</span>
                </div>
              ) : (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <IoCopy size={28} className="sm:w-8 sm:h-8 text-[#f7f1e3]" />
                </div>
              )}
            </div>
            <div className="absolute text-[#f7f1e3] m-3 sm:m-[15px] text-[16px] sm:text-[18px]">{pal.name}</div>
          </span>
        ))}
      </div>
    </>
  );
}
