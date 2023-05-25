import React from "react";
import { useEffect } from "react";

export function ProductList({ list, listModifier }) {
  useEffect(() => {
    console.log("Created a function from zero");
  }, [listModifier]);

  return (
    <ul>
      {listModifier(list).map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}    