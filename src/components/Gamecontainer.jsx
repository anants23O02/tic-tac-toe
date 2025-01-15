import Player from "./Player.jsx";
import { useState } from "react";
import Gameboard from "./Gameboard.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";
import Gameover from "./Gameover.jsx";
const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function Gamecontainer({ log, logHandler, onRestart }) {
  const [activePlayer, setActivePlayer] = useState(0);
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [gameover, setGameover] = useState(winner || draw);
  const [reset, setReset] = useState(false);
  const [gameBoard, setGameboard] = useState(INITIAL_GAME_BOARD);

  const initialName = ["Player 1", "Player 2"];
  let player1name = initialName[0];
  let player2name = initialName[1];

  function activePlayerToggle() {
    if (activePlayer == 0) {
      setActivePlayer(1);
    } else {
      setActivePlayer(0);
    }
  }

  function checkWinner(gameboard) {
    WINNING_COMBINATIONS.map((move) => {
      let one = gameboard[move[0].row][move[0].column];
      let two = gameboard[move[1].row][move[1].column];
      let three = gameboard[move[2].row][move[2].column];
      // console.log('one,two,three :>> ', one,two,three);
      if (one && two && three && one == two && one == three) {
        setWinner(true);
        setGameover(true);
      } else {
        return;
      }
    });
  }
  function checkDraw(log) {
    if (log.length == 9) {
      setDraw(true);
      setGameover(true);
    }
  }

  function restartHandle() {
    setGameboard(INITIAL_GAME_BOARD);
    setWinner(false);
    setDraw(false);
    setGameover(false);
    setReset(true);
    onRestart();
  }

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <li className={activePlayer == 0 ? "active" : ""}>
          <Player playername={player1name}></Player>
        </li>
        <li className={activePlayer == 1 ? "active" : ""}>
          <Player playername={player2name}></Player>
        </li>
      </ol>
      {gameover ? (
        <Gameover
          gameover={gameover}
          activePlayer={activePlayer}
          onRestart={restartHandle}
        />
      ) : (
        <></>
      )}
      <Gameboard
        gameBoard={gameBoard}
        setGameboard={setGameboard}
        currentPlayer={activePlayer}
        activeplayerHandler={activePlayerToggle}
        logHandle={logHandler}
        checkWinner={checkWinner}
        reset={reset}
      />
    </div>
  );
}
