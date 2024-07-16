import { useState } from "react"
import Player from "./Player"
import GameBoard from "../GameBoard"
import Log from "./Log"
export default function Main (){
    const [gameTurns,setgameTurns] = useState([])
    function playerSelect(colIndex,rowIndex){
        setgameTurns(prevTurns => {
            player = 'X'
            if(prevTurns.length>0 && prevTurns[prevTurns.length-1].player == 'X'){
                player = 'O'
            }  
            const newTurn = {square:{colIndex, rowIndex}, player} 
            const updTurns = prevTurns
            updTurns.push(newTurn)
            console.log(updTurns)
            return updTurns
        })
    }
    return(
        <main>
            <div id="game-container">
                <ol id="players" className="highlight-player">
                 <Player turns={gameTurns} name='Player1' symbol='X'></Player>   
                 <Player turns={gameTurns} name='Player2' symbol='O'></Player>
                </ol>
                <GameBoard onSelectPlayer={playerSelect} turns = {gameTurns}/>
            </div>
            <Log turns={gameTurns}/>
        </main>
    )
}
// main{players,gameboard}, log
// disable(attribute) btn - онклик не работает после нажатия 
// в виде массива вариации выигрыша