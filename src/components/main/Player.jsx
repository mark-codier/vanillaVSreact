export default function ({name,symbol}){
    return(
        <>
        <li>
            <span className="player-name">{name}</span>
            <span className="player-symbol">{symbol}</span>
        </li>
         </>
    )
}