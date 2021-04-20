import React from "react";
import Head from "next/head";

export default function PageHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="./color-palette.svg"></link>
      <title>Color Bank — Find Your True Colours</title>
      <meta name="title" content="Color Bank — Find Your True Colours"></meta>
      <meta
        name="description"
        content="Color bank offers 8 color palettes ranging across the color spectrum designed to help you with you find your perfect project colors."></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://colorbank.noahatkins.com/"></meta>
      <meta property="og:title" content="Color Bank — Find Your True Colours"></meta>
      <meta
        property="og:description"
        content="Color bank offers 8 color palettes ranging across the color spectrum designed to help you with you find your perfect project colors."></meta>
      <meta property="og:image" content="colourbank.png"></meta>

      <meta property="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:url" content="https://colorbank.noahatkins.com/"></meta>
      <meta property="twitter:title" content="Color Bank — Find Your True Colours"></meta>
      <meta
        property="twitter:description"
        content="Color bank offers 8 color palettes ranging across the color spectrum designed to help you with you find your perfect project colors."></meta>
      <meta property="twitter:image" content="colourbank.png"></meta>
    </Head>
  );
}
