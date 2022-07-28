import React from "react";
import "./style.scss";
function Button({ btnName, handleSubmit }) {
  return (
    <button type="submit" onClick={handleSubmit}>
      {btnName}
    </button>
  );
}

export default Button;
