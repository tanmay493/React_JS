import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    let [data,setData]=useState({})
    let navigate=useNavigate()

    function loginInput(e){
        let {name,value}=e.target 
        setData({...data,[name]:value})
    }
   let localdata=JSON.parse(localStorage.getItem('signup'))
    function frmdata(e){
        e.preventDefault()
        // console.log(logininput)
        if(data.email!=localdata.email || data.password!=localdata.password){
        alert("user not found")
        
         }
    else{
        alert("sucessful")
        navigate('/home')
      }
    }
    return(
        <>
        <h1>Login page </h1>
         
         <form onSubmit={frmdata}>
            <label htmlFor="">email</label>
            <input type="text" name='email' onChange={loginInput}/> <br /> <br />
            <label htmlFor="">password</label>
            <input type="text"  name='password' onChange={loginInput}/> <br /> <br />

            <input type="submit" />


         </form>
        
        </>
    )

}
export default Login