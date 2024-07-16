import {useState,useRef, useEffect} from "react"
export default function ({name,symbol,turns}){
    const [isEdit,setIsEdit] = useState(0);
    const [playerName,setPlayerName] = useState(localStorage[name])
    let activePlayer = 'X'
    let tag = <span className="player-name">{playerName}</span>
    if(isEdit){
        tag = <input 
                value={playerName} 
                onChange={(e)=>{
                    setPlayerName(e.target.value)
                }} 
                type="text" />
    }
    useEffect(()=>{
        activePlayer = turns.length>0 && turns[turns.length-1].player
        localStorage[name] = playerName
    },[playerName])
    function handleClick(){
        setIsEdit(isEdit ? false : true)
    }
    //react puts State(when we use setState function) in order - mutation(измениние)
    return(
        <>
        <li className={symbol===activePlayer ? 'active': null}>
            <span className="player">
                {tag}
                <span className="player-symbol">{symbol}</span>
                <button onClick={handleClick}>{isEdit ? 'Confirm' : 'Edit'}</button>
            </span>
        </li>
        </>
    )
}
//Попробовать менять валю в инпуте(локалсторадж с сохранением не обязательно): двусторонний биндинг(и с нуля создавать валю (player 1 - default) и потом способность к редактированию)(Поискать listener к этому)
//
//
//
//