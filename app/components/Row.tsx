import React from "react";
import getPalette from "./GetPalette";

export default function Row({color, start, end, className}: {color: string; start: number; end: number; className: string}) {
  const colors = getPalette(color);

  return (
    <div className="flex w-full">
      {/* @ts-ignore */}
      {colors.slice(start, end).map((col: {color: string}, key: number) => (
        <span
          key={key}
          className={`flex-1 min-h-[180px] transition-all duration-300 hover:opacity-90 ${className === "top" && key === 0 ? "rounded-tl-xl" : ""} ${className === "top" && key === 2 ? "rounded-tr-xl" : ""} ${className === "bottom" && key === 0 ? "rounded-bl-xl" : ""} ${className === "bottom" && key === 2 ? "rounded-br-xl" : ""}`}
          style={{
            background: col.color,
          }}
        ></span>
      ))}
    </div>
  );
}
