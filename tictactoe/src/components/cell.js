import React from "react";
import "./cell.css";

const Cell = ({ value, onClick }) => {
  return (
    <button className="classbutton" onClick={onClick}>
      {value}
    </button>
  );
};

export default Cell;
