import React from "react";

export default function Button({ variant, ...rest }) {
  return (
    <button className={`btn ${variant ? variant : ""}`} {...rest}>
      {children}
    </button>
  );
}
