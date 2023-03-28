import React, { useState } from "react";
export function CounterUseState() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Counter using useState</h3>
      <button onClick={() => setCounter(counter - 1)}>-</button>&nbsp;
      <span>{counter}</span>&nbsp;
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}
