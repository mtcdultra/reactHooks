import React, { useEffect } from "react";

export default function FakeModal({ forwaredRef }) {
  useEffect(() => {
    forwaredRef.current?.focus(); // if inputRef.current is not null, then focus
  }, [forwaredRef]);

  return (
    <div>
      <br />
      <label for="email">E-mail</label>
      <br />
      <input ref={forwaredRef} type="email" id="email" />
    </div>
  );
}
