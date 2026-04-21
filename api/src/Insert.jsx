import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Insert(){
    let [frmdata,setFrmdata]=useState({})
    let navigator=useNavigate()

    function handleinput(e){
        let {name,value}=e.target 
        setFrmdata({...frmdata,[name]:value})
    }
    function submit(e){
        e.preventDefault()
        axios.post('http://localhost:3000/userdata',frmdata)
        .then((r)=>alert("success"))
        navigator('/show')
    }


    return(
        <>
        <h1>this is insert page</h1>
        <form onSubmit={submit}>
            <label htmlFor="">Name</label>
            <input type="text" name="name" onChange={handleinput}/><br /><br />
            <label htmlFor="">Age</label>
            <input type="text" name="age" onChange={handleinput}/><br /><br />
            <label htmlFor="">Contact</label>
            <input type="text" name="contact" onChange={handleinput}/><br /><br />
            <label htmlFor="">City</label>
            <input type="text" name="city" onChange={handleinput}/><br /><br />
            
            <input type="submit" />


        </form>

        </>
    )
}
export default Insert