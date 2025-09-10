import React, { useState } from "react";
import Sqare from "./Sqare";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const copystate = [...state];
    copystate[index] = isXTurn ? "X" : "0";
    setState(copystate);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div>
      {isWinner ? (
        <>
          {isWinner} won the Game 😊 🚀{" "}
          <button
            className="bg-gray-200 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-gray-300 ml-5"
            onClick={() => handleReset()}
          >
            Play Again
          </button>
        </>
      ) : (
        <>
          <div className="flex justify-evenly items-center">
            <Sqare onClick={() => handleClick(0)} value={state[0]} />
            <Sqare onClick={() => handleClick(1)} value={state[1]} />
            <Sqare onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="flex justify-evenly items-center">
            <Sqare onClick={() => handleClick(3)} value={state[3]} />
            <Sqare onClick={() => handleClick(4)} value={state[4]} />
            <Sqare onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="flex justify-evenly items-center">
            <Sqare onClick={() => handleClick(6)} value={state[6]} />
            <Sqare onClick={() => handleClick(7)} value={state[7]} />
            <Sqare onClick={() => handleClick(8)} value={state[8]} />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Board;
