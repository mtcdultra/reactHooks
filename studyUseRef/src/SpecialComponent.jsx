import React, { useEffect } from "react";

export default function SpecialComponent() {
  useEffect(() => {
    document.title = "Visible component";

    // componentWillUnmount
    return () => {
      document.title = "Ready to Go | useEffect";
    };
  }, []);

  return (
    <>
      <h3>Check the page title</h3>
    </>
  );
}
