import React from 'react'
import{useState} from "react"

const App = () => {
  const[color,setcolor]=useState("red");
  return (
    <>
    <h1 style={{color:color}}>Welcome :{color} </h1>
    <button onClick={()=>{setcolor("pink")}}>pink</button>
    <button onClick={()=>{setcolor("blue")}}>blue</button>
    <button onClick={()=>{setcolor("green")}}>green</button>
    <button onClick={()=>{setcolor("orange")}}>orange</button>
      
    </>
  )
}

export default App
