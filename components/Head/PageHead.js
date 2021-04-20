import React from "react";
import Head from "next/head";

export default function PageHead({title}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="./color-palette.svg"></link>
    </Head>
  );
}
