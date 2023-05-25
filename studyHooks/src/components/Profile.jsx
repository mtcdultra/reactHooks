import React from "react";
import usePath from "../hooks/usePath";

export function Profile() {
  const { isHome } = usePath();
  return (
    <div>
      <h1>Profile</h1>
      {isHome ? (
        <h2>You are at initial page</h2>
      ) : (
        <h2>You are not at initial page</h2>
      )}
    </div>
  );
}
