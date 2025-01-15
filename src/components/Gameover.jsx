export default function Gameover({ gameover, activePlayer, onRestart }) {
  let player;
  if (activePlayer == 0) {
    player = "0";
  } else {
    player = "X";
  }
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p>{` ${player} won!!!!!!`}</p>
      <p>
        <button onClick={onRestart}>Rematch!</button>
      </p>
    </div>
  );
}
