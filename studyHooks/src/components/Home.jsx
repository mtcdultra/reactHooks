import React from "react";
import usePath from "../hooks/usePath";

export function Home() {
  const { isHome } = usePath();

  return (
    <div>
      <h1>Home</h1>
      {isHome ? (
        <h2>You are at initial page</h2>
      ) : (
        <h2>You are not at initial page</h2>
      )}
    </div>
  );
}
