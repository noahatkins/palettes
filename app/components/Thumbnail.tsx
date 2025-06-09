import React from "react";
import {useRouter} from "next/navigation";

const colorVariants = {
  red: {
    light: "#FF6B6B",
    dark: "#FF3B30",
  },
  yellow: {
    light: "#FFE169",
    dark: "#FFCC00",
  },
  green: {
    light: "#87CF8F",
    dark: "#34C759",
  },
  blue: {
    light: "#5E72EB",
    dark: "#007AFF",
  },
  pink: {
    light: "#FFB6C1",
    dark: "#FF2D55",
  },
  purple: {
    light: "#D4A5FF",
    dark: "#AF52DE",
  },
  gray: {
    light: "#C7C7CC",
    dark: "#8E8E93",
  },
  black: {
    light: "#3A3A3C",
    dark: "#1C1C1E",
  },
} as const;

export default function Thumbnail({path, title, color}: {path: string; title: string; color: string}) {
  const router = useRouter();
  const selectedColor = colorVariants[color as keyof typeof colorVariants] || colorVariants.gray;

  return (
    <div className="group relative overflow-hidden rounded-3xl glass-effect hover:scale-[1.02] transition-all duration-500 cursor-pointer bg-background/30 backdrop-blur-md" onClick={() => router.push(path)}>
      <div className="relative z-10 p-8">
        <div className="aspect-[3/2] h-24 w-full rounded-2xl overflow-hidden">
          <div
            className="w-full h-full transition-all duration-300 hover:opacity-90"
            style={
              {
                background: `linear-gradient(135deg, var(--mode-color) 0%, var(--mode-color-secondary) 100%)`,
                "--mode-color": `${selectedColor.light}`,
                "--mode-color-secondary": `${selectedColor.dark}`,
              } as React.CSSProperties
            }
          />
        </div>
        <div className="mt-6">
          <h3 className="text-foreground text-xl font-medium text-center group-hover:scale-105 transition-transform duration-300">{title}</h3>
        </div>
      </div>
    </div>
  );
}
