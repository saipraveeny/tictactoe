import React from "react";
import "./winnerComponent.css";
export const WinnerComponent = (props) => {
  return (
    <div>
      {props.noMoves ? (
        <h2>{"no moves available"}</h2>
      ) : (
        <h2>{"Winner is " + props.name}</h2>
      )}
    </div>
  );
};

/*export  WinnerComponent;*/
