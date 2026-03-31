import { useState } from "react"
import Colorwala from "./Colorwala"
import Imagewala from "./Imagewala"

function App(){
  let[count,setCount]=useState(0)
  function incr(){
    setCount(count+1)
  }
  function decr(){
    setCount((count>0)?count-1:count=0(alert('not less than 0')))
  }
  return(
    <>
    <h1>{count}</h1><br />
    <button onClick={incr}>+</button>
    <button onClick={decr}>-</button>
    <hr />
    <Colorwala/>
    <hr />
    <Imagewala/>

    
    </>
  )
}
export default App