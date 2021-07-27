import React, { useState } from "react";
import calculateWinner from "../winnercal";
import "./Game.css";
import Board from "./Board";
import { WinnerComponent as Dummy } from "./winnerComponent";
// import video from "../assets/video.mp4";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const noMoves = !winner && stepNumber === 9;
  const xO = xIsNext ? "X" : "O";

  const handleClick = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const cells = [...current];
    if (winner || cells[i]) return;
    cells[i] = xO;
    setHistory([...historyPoint, cells]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Go to Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });

  return (
    <>
      {/* <video id="myVideo" loop autoPlay>
        <source src={video} type="video/mp4" />
      </video> */}
      <h1>Tic Tac Toe</h1>

      {winner || noMoves ? (
        <Dummy name={winner} noMoves={noMoves}></Dummy>
      ) : (
        <>
          <Board cells={history[stepNumber]} onClick={handleClick} />
          <div className="info-wrapper">
            <div>
              <h3>History</h3>
              {renderMoves()}
            </div>
            <h3>{xO + ": Players Turn"}</h3>
          </div>
        </>
      )}
    </>
  );
};

export default Game;
