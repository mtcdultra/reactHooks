import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export function DoubleCounter() {
  const { doubleCounter } = useContext(CounterContext);

  return <h1>Counter double: {doubleCounter}</h1>;
}
