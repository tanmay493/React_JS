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
// ------------------------------------------------------------------
  let [data1,setData1]=useState(0)
  function add(){
   setData1(data1+1) //data1+1 (++data) nahi likhte 

  }
  function sub(){
     setData1(data1-1) //data-1 (--data1) nahi likhte

  }
  // -------------------------------------------------------
  
  let[color,setColor]=useState('green')
//-------------------------------------------------------
let[ob,setOb]=useState({name:"code",age:23})
let[person,setPerson]=useState(["tom",45,"bhopal"])

  
  
    
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
<button onClick={()=>demo1("hello everyone")}>click argument</button>
<br /><br />
<button onClick={demo2}>click changes</button>
<hr />
<h1>{data1}</h1>
<button onClick={add}>+</button>
<button onClick={sub}>-</button>
<hr />
<div style={{height:"100vh",backgroundColor:color}} >
<button onClick={()=>setColor('red')}>red</button><br />
<button onClick={()=>setColor('yellow')}>yellow</button><br />
<button onClick={()=>setColor('orange')}>orange</button><br />
<button onClick={()=>setColor('blue')}>blue</button>
</div>
<hr />
<h1>{ob.name}</h1>
<br />
<h1>{person[1]}</h1>



</>

  )
}
export default App;