import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
function App() {
  const obj = {
    initialInvestment:null,
    annualInvestment:null,
    expectedReturn:null,
    duration:null
}
  const [stateObj,setStateObj] = useState(obj)
  function inputHandler(name,value){
      let newObj = JSON.parse(JSON.stringify(stateObj))
      newObj[name] = +value
      setStateObj(newObj)
  }
  return (<>
   <Header/>
   <UserInput fn={inputHandler}/>
   <Results obj={stateObj}/>
   </>)
}

export default App
