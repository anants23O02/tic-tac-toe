import React from "react";
// import {useState} from 'react';

export default function Gameboard({
  gameBoard,
  setGameboard,
  currentPlayer,
  activeplayerHandler,
  logHandle,
  checkWinner,
  reset,
}) {
  function gameClickHandle(row, col) {
    const newgameBoard = gameBoard.map((rowArray, rowIndex) => {
      if (rowIndex == row) {
        const newRow = [...rowArray];
        currentPlayer == 0 ? (newRow[col] = "X") : (newRow[col] = "0");
        return newRow;
      }
      return rowArray;
    });
    // console.log('row,col :>> ', row,col);
    setGameboard(newgameBoard);
    logHandle(currentPlayer, row, col);
    activeplayerHandler();
    checkWinner(newgameBoard);
  }

  return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((value, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => {
                    gameClickHandle(rowIndex, colIndex);
                  }}
                >
                  {value == null ? "" : value}{" "}
                </button>
              </li>
            ))}
          </ol>
        ))}
      </ol>
    </>
  );
}
