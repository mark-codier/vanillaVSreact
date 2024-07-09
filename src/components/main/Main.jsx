import Player from "./Player"
export default function Main (){
    return(
        <main>
            <div id="game-container">
                <ol id="players">
                 <Player name='Player1' symbol='X'></Player>   
                 <Player name='Player2' symbol='O'></Player>
                </ol>
            </div>
        </main>
    )
}
// main{players,gameboard}, log