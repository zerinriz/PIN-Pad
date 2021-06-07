import React from "react";

const Button = ({ caption, action, disabled }) => {
  return (
    <button
      className="button"
      disabled={disabled}
      onClick={() => action(caption)}
    >
      {caption}
    </button>
  );
};

export default Button;
