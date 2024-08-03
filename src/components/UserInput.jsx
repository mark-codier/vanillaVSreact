export default function UserInput({fn}){
    return(
        <section id="user-input">
            <div className="input-group">
                <p><label>Initial Investment</label><input onChange={(e)=>fn('initialInvestment',e.target.value)} type="number" /></p>
                <p><label>Annual Investment</label><input type="number" onChange={(e)=>fn('annualInvestment',e.target.value)}/></p>
            </div>
            <div className="input-group">
            <p> <label>Expected Return</label><input type="number" onChange={(e)=>fn('expectedReturn',e.target.value)} /> </p>
            <p>  <label>Duration</label> <input type="number" onChange={(e)=>fn('duration',e.target.value)}/> </p>
            </div> 
        </section>
    )
}
