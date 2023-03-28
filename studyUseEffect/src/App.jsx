import React, { useEffect, useState } from "react";
import SpecialComponent from "./SpecialComponent";
function App() {
  const [counter, setCounter] = useState(0);
  const [showComponent, setShowComponent] = useState(false);

  function increaseCounter() {
    setCounter(counter + 1);
  }

  function handleComponentVisibility() {
    setShowComponent(!showComponent);
  }

  // componentWillMount
  useEffect(() => {
    document.title = "Ready to Go | useEffect";
  }, []);

  // componentWillUpdate
  useEffect(() => {
    alert("Counter has been changed: " + counter);
  }, [counter]);

  return (
    <>
      <h1>Ready to Go</h1>
      <h2>{counter}</h2>
      <button onClick={increaseCounter}>Increase Counter</button>&nbsp;
      <button onClick={handleComponentVisibility}>
        {showComponent ? "Hide the component" : "Show the component"}
      </button>{" "}
      <br />
      {showComponent && <SpecialComponent />}
    </>
  );
}

export default App;
