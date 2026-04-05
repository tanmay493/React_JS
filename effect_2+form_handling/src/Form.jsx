import { useState } from "react"

function Form(){

    let [frmdata,setFrmdata]=useState()
    let [frmdata1,setFrmdata1]=useState()
    let [frmdata2,setFrmdata2]=useState()
    let [frmdata3,setFrmdata3]=useState()
    let [frmdata4,setFrmdata4]=useState()

   
    
    function formsubmit(e){
        e.preventDefault() //yeh function form ki value ko rok kar rakhne ka kaam karta hai
        console.log(frmdata)
        console.log(frmdata1)
        console.log(frmdata2)
        console.log(frmdata3)
        console.log(frmdata4)
    }

    return(
        <>
        <h1>this is form page</h1>
        <form action="" onSubmit={formsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" onChange={(e)=>setFrmdata(e.target.value)} /><br />
        <label htmlFor="">Age</label>
        <input type="text" onChange={(e)=>setFrmdata1(e.target.value)} />
        <label htmlFor="">city</label>
        <input type="text" onChange={(e)=>setFrmdata2(e.target.value)} />
        <label htmlFor="">state</label>
        <input type="text" onChange={(e)=>setFrmdata3(e.target.value)}/>
        <label htmlFor="">Contact</label>
        <input type="text" onChange={(e)=>setFrmdata4(e.target.value)}/>

        <input type="submit" />
        </form>
        </>
    )

}
export default Form