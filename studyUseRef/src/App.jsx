import React, { useEffect, useState } from "react";
import RefInterectingWithDOM from "./RefInterectingWithDOM";

function App() {
  const [counter, setCounter] = useState(0);
  function increaseCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      {/* <RefAsCounter />     */}
      <RefInterectingWithDOM />
    </>
  );
}

export default App;
