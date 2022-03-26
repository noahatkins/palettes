import React from "react";
import Head from "next/head";

export default function PageHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="./color-palette.svg"></link>
      <meta name="title" content="Hue Hub — Find Your True Colours"></meta>
      <meta property="image" content="/huehub.png"></meta>
      <meta
        property="keywords"
        content="atkins,bank,black,blue,color,green,grey,noah,orange,pink,purple,yellow, noah atkins, color bank, color palette, colour bank, hue, hue hub"></meta>
      <meta
        name="description"
        content="Hue Hub offers 8 different color palettes ranging across the color spectrum carefully crafted to help you find your perfect project colors."></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://huehub.noahatkins.com/"></meta>
      <meta property="og:title" content="Hue Hub — Find Your True Colours"></meta>
      <meta
        property="og:description"
        content="Hue Hub offers 8 different color palettes ranging across the color spectrum carefully crafted to help you find your perfect project colors."></meta>
      <meta property="og:image" content="/huehub.png"></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://huehub.noahatkins.com/"></meta>
      <meta property="twitter:title" content="Hue Hub — Find Your True Colours"></meta>
      <meta
        property="twitter:description"
        content="Hue Hub offers 8 different color palettes ranging across the color spectrum carefully crafted to help you find your perfect project colors."></meta>
      <meta property="twitter:image" content="/huehub.png"></meta>
    </Head>
  );
}
