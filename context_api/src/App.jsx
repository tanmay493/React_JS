import { createContext } from "react"
import Child1 from "./Child1"
import Home from "./Home"
import About from "./About"

let xyz=createContext()

function App(){
  let name="data"
  return(
    <>
    <h1>App page {name}</h1>
    <xyz.Provider value={name}> 
      <Child1/>
    </xyz.Provider>
    <Home/>
    <About/>

    </>
  )
}
export default App
export{xyz}