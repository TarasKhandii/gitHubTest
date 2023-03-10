import React from "react";
import "./style.scss";

function Btn({ onClick, text }) {
  return (
    <button title="Get GitHub" onClick={onClick} className="btn">
      {text}
    </button>
  );
}

export default Btn;
