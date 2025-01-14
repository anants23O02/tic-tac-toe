export default function Gameover({gameover, activePlayer}) {
    let player;
    if(activePlayer == 0){
        player = '0';
    }else{
        player = 'X';
    }
    return (
        <div id="game-over">
            <h2>
                Game Over!
            </h2>
                <p>
                    {` ${player} won!!!!!!`}
                </p>
        </div>
    );
}