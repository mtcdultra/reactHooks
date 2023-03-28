import React, { useState } from "react";
import { CounterUseReducer } from "./CounterUseReducer";
import { CounterUseState } from "./CounterUseState";

function App() {
  return (
    <div>
      <CounterUseState />
      <CounterUseReducer/>
    </div>
  );
}

export default App;
