import Player from "./Player.jsx";
import { useState } from 'react';
import Gameboard from './Gameboard.jsx'
import {WINNING_COMBINATIONS} from './winning-combinations.js'
import Gameover from './Gameover.jsx'

export default function Gamecontainer({log,logHandler}) {
    const[activePlayer, setActivePlayer] = useState(0);
    const initialName = ["Player 1", "Player 2"];
    let player1name = initialName[0];
    let player2name = initialName[1];
    
    function activePlayerToggle() {
        if(activePlayer == 0){
            setActivePlayer(1)
        }
        else{
            setActivePlayer(0)
        }
    }

const [winner,setWinner] = useState(false);   
function checkWinner(gameboard) {
    WINNING_COMBINATIONS.map(move => {
        let one = gameboard[move[0].row][move[0].column]
        let two = gameboard[move[1].row][move[1].column]
        let three = gameboard[move[2].row][move[2].column]
        console.log('one,two,three :>> ', one,two,three);
        if((one && two && three) && (one == two && one == three)){
            setWinner(true)
        }
        else{
            return;
        }
    });
}
const [draw,setDraw] = useState(false);
function checkDraw(log){
    if (log.length == 9) {
        setDraw(true);
    }
}

let gameover;
if (winner || draw) {
    if (winner){
        gameover = 'winner';
    }
    else if (draw) {
        gameover = 'draw'
    }
}

  return (
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <li className = {activePlayer == 0 ? 'active':''}>
        <Player playername = {player1name} ></Player>
        </li>
        <li className = {activePlayer == 1 ? 'active':''}>
        <Player playername = {player2name} ></Player>
        </li>
      </ol>
      {gameover ? <Gameover gameover = {gameover} activePlayer = {activePlayer}/>  : <></>}
      <Gameboard currentPlayer = {activePlayer} activeplayerHandler = {activePlayerToggle} logHandle = {logHandler} checkWinner = {checkWinner} />
    </div>
  );
}
