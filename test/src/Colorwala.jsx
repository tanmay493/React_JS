import { useState } from "react"

function Colorwala(){
   let [color,setColor]=useState()
    return(
        
        <>
        <div style={{backgroundColor:color}}>
            <button onClick={()=>setColor('green')}>green</button><br />
            <button onClick={()=>setColor('orange')}>orange</button><br />
            <button onClick={()=>setColor('yellow')}>yellow</button><br />
            <button onClick={()=>setColor('blue')}>blue</button>


        </div>
        </>
    )

}
export default Colorwala