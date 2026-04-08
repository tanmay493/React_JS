import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(){
    let[signup,setSignup]=useState({})
   let navigate= useNavigate()


    function formsubmit(e){
        e.preventDefault()
        console.log(signup)
        localStorage.setItem("signup",JSON.stringify(signup))
        navigate('/login')



}  

 function handleinput(e){
    let {name,value}=e.target  
    setSignup({...signup,[name]:value})

 }
    
    return(
        <>
        <h1>signup page</h1>
        <form onSubmit={formsubmit} >
            <label htmlFor="">name</label>
            <input type="text" onChange={handleinput} name='name'/><br /> <br />
            <label htmlFor="">email</label>
            <input type="text" onChange={handleinput} name='email'/> <br /> <br />
            <label htmlFor="">password</label>
            <input type="text" onChange={handleinput} name='password'/>

            <input type="submit" />


        </form>
        
        
        </>
    )


}
export default Signup