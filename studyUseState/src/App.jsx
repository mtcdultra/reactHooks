import React, { useState } from "react";
function App() {
  const [title, setTitle] = useState("Hello World 3");
  const [showContent, setShowContent] = useState(false);

  function handleTitle() {
    setTitle("Estado modificado");
  }

  function handleContent() {
    setShowContent(!showContent);
  }

  return (
    <>
      <h1>{title}</h1>
      <ExclusiveContent showContent={showContent} />
      <button onClick={handleContent}>
        {showContent
          ? "Click to hide the content"
          : "Click to show the content"}
      </button>
      &nbsp;
      <button onClick={handleTitle}>Change Title</button>
    </>
  );
}

function ExclusiveContent({ showContent }) {
  return <>{showContent && <p>Show message</p>}</>;
}

export default App;
