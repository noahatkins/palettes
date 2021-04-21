import React from "react";
import getPalette from "./GetPalette";

export default function Row({color, start, end, className}) {
  const colors = getPalette(color);

  return (
    <div className="row">
      {colors.slice(start, end).map((col, key) => (
        <span
          key={key}
          className={className}
          style={{
            background: col.color,
          }}></span>
      ))}
    </div>
  );
}
