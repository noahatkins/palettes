"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import Thumbnail from "@/app/components/Thumbnail";
import {Moon, Sun} from "lucide-react";

export default function Home() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* Header with theme toggle */}
      <header className="min-h-[10vh] max-h-[10vh] flex items-center glass-effect bg-background/30 px-3 sm:px-5 border-b border-border/50 z-[150]">
        <div className="w-fit">
          <h1 className="text-[24px] font-medium">Palettes</h1>
        </div>
        <div className="flex-1 w-fit flex justify-end">
          <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} className="hover:opacity-80 transition-opacity" aria-label="Toggle theme">
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 py-4">
          <Thumbnail path="/palette/red" title="Red" color="red" />
          <Thumbnail path="/palette/yellow" title="Yellow/Orange" color="yellow" />
          <Thumbnail path="/palette/green" title="Green" color="green" />
          <Thumbnail path="/palette/blue" title="Blue" color="blue" />
          <Thumbnail path="/palette/pink" title="Pink" color="pink" />
          <Thumbnail path="/palette/purple" title="Purple" color="purple" />
          <Thumbnail path="/palette/grey" title="Grey" color="grey" />
          <Thumbnail path="/palette/black" title="Black" color="black" />
        </div>
      </main>
    </div>
  );
}
