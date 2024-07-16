import { useState } from "react"
const firstGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null],
]
export default function GameBoard({onSelectPlayer,turns}){
    function Board(){
        function boardHandle(turnses){
            let gameBoard = firstGameBoard;
            for(const obj of turnses) {
            const {square:{colIndex,rowIndex}, player} = obj;
            console.log(rowIndex,colIndex,player)
            gameBoard[rowIndex][colIndex] = player
                } 
            return gameBoard
        }
        return(
            <>
            {boardHandle(turns).map((row,i)=>{
                return <li key={i}>
                    <ol>
                        {row.map((playerSymbol,j)=>{
                            return <li key={j}>
                                <button onClick={()=>onSelectPlayer(j,i)}>{playerSymbol}</button>
                            </li>
                        })}
                    </ol>
                </li>
            })}
            </>
        )
    }
    return(
        <ol id="game-board">
            <Board/> 
       </ol>
    )
}
// const [gameBoard,setGameBoard] = useState(firstGameBoard)
// function kletkaHandler(i,j,symbol){
//     if(symbol == null){
//     setGameBoard(prevGB=>{
//         const updGB = [...prevGB.map(innerArr=>[...innerArr])]
//         updGB[i][j] = activePlayerSymbol
//         return updGB
//     })
//     // state is immutable
//     // не стоит менять state на прямую
//     onSelectPlayer()}
// }