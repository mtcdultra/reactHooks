import React from "react";
import { memo } from "react";

function Product({ name }) {
  console.log("Product rendered");
  return (
    <li>
      <strong>{name}</strong>
    </li>
  );
}

export default memo(Product);
