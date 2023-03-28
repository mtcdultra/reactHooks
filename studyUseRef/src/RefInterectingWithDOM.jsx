import React, { useState, useEffect, useRef } from "react";
import FakeModal from "./FakeModal";

export default function RefInterectingWithDOM() {
  const [showModal, setShowModal] = useState(false);
  const inputRef = useRef();

  function showFakeModal() {
    setShowModal(true);
  }


  return (
    <>
      <h1>Interecting with DOM elements</h1>
      <button onClick={showFakeModal}>Click to inform your e-mail</button>
      {showModal && <FakeModal forwaredRef={inputRef} />}
    </>
  );
}
