import React from 'react';
import {useState} from 'react';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard({currentPlayer, activeplayerHandler, logHandle,checkWinner }) {
    const [gameBoard,setGameboard] = useState(INITIAL_GAME_BOARD);

    function gameClickHandle(row,col) {
        const newgameBoard = gameBoard.map((rowArray,rowIndex) =>
         {
            if (rowIndex == row){
                const newRow = [...rowArray];
                currentPlayer == 0 ? newRow[col] = 'X': newRow[col] ='0';
                return newRow;
            }
            return rowArray;
         });
        // console.log('row,col :>> ', row,col);
        setGameboard(newgameBoard);
        logHandle(currentPlayer,row,col);
        activeplayerHandler();
        checkWinner(newgameBoard)
    }


    return (
    <>
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => (
          <ol key={rowIndex}>
            {row.map((value, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => {
                        gameClickHandle(rowIndex,colIndex)
                } } >{value == null ? '':value}  </button> {/* Show X or O or nothing */}
              </li>
            ))}
          </ol>
        ))}
      </ol>
    </>
  );
}
