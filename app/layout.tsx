import React from "react";
import type {Metadata} from "next";
import {ThemeProvider} from "next-themes";
import {GeistSans} from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Palettes",
  description: "Perfect Colors for Perfect Projects",
  icons: {
    icon: "/color-palette.svg",
  },
  openGraph: {
    title: "Palettes",
    description: "Perfect Colors for Perfect Projects",
    images: ["https://palettes.noahatkins.com/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Palettes",
    description: "Perfect Colors for Perfect Projects",
    images: ["https://palettes.noahatkins.com/api/og"],
  },
  keywords: "atkins,bank,black,blue,color,green,grey,noah,orange,pink,purple,yellow,noah atkins,color bank,color palette,colour bank,palettes,hue ",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
