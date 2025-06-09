"use client";

import Palette from "@/app/components/Palette";
import React from "react";

export default function PalettePage({params}: {params: Promise<{palette: string}>}) {
  const {palette} = React.use(params);
  return <Palette paletteUrl={palette} />;
}
