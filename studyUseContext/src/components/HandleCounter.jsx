import React from "react";
import { useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";

export function HandleCounter() {

  const {counter, increaseCounter} = useContext(CounterContext)


  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increaseCounter}>Increase Counter</button>
    </div>
  );
}
