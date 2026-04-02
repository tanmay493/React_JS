import { useEffect, useState } from "react"


function App(){
  // useEffect(()=>alert('working')) without dependedncy har action par alert show hoga
  useEffect(()=>alert('working'),[])//with empty dependency sirf 1st action par alert show hoga
  let [count,setCount]=useState(0)
  function incr(){
    setCount(count+1)
  }
  return(
    <>
    <h1>{count}</h1>
    <button onClick={incr}>+</button>
    
    </>
  )
}
export default App