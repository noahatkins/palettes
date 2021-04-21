import React from "react";
import {useRouter} from "next/router";
import Row from "./Row";

export default function Thumbnail({path, title, color}) {
  const router = useRouter();
  return (
    <div className="thumbnail" onClick={() => router.push(path)}>
      <Row color={color} start="0" end="3" className="top" />
      <Row color={color} start="3" end="6" className="middle" />
      <Row color={color} start="6" end="9" className="bottom" />
      <h3>{title}</h3>
    </div>
  );
}
