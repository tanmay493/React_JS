import { useState } from "react";

function App(){
  let [data,setData]=useState("watch")

  function demo(){
    alert("welcome")
  }

  function demo1(x){
    alert(x)
  }

  function demo2(){
    setData("change the time")
  }
let [data1,setData1]=useState(0)
  function add(){
   setData1(++data1)

  }
  function sub(){
     setData1(--data1)

  }
  return(
<>

<h1>this is app page = {data}</h1>
<button onClick={demo}>click</button><br />
<button onDoubleClick={demo}>click dbl</button><br />
<button onMouseEnter={demo}>click enter</button><br />
<button onMouseLeave={demo}>click leave</button><br />
<button onContextMenu={demo}>click context menu</button>
<br />
<br />
<button onClick={()=>demo1("vl")}>click argument</button>
<br /><br />
<button onClick={demo2}>click changes</button>
<hr />
<h1>{data1}</h1>
<button onClick={add}>+</button>
<button onClick={sub}>-</button>


</>

  )
}
export default App;