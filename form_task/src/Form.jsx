import { useState } from "react"

function Form(){
    let[form,setForm]=useState({})

    function handleInput(e){
        let {name,value}=e.target 
        setForm({...form,[name]:value})
        


    }
    function formsubmit(e){
        e.preventDefault()
        console.log(form)
        localStorage.setItem("userdata",JSON.stringify(form))
        
    }
    let val=JSON.parse(localStorage.getItem("userdata"))
    console.log(val)
    
    return(
        <>
        <form action="" onSubmit={formsubmit}>
            <label htmlFor="">name</label>
            <input type="text"  name='name' onChange={handleInput} /><br />
            <label htmlFor="">age</label>
            <input type="text" name='age' onChange={handleInput} /><br />
            <label htmlFor="">city</label>
            <input type="text" name='city' onChange={handleInput} /><br />
            <label htmlFor="">contact</label>
            <input type="text" name='contact' onChange={handleInput} /><br />
            <label htmlFor="">email</label>
            <input type="text" name='email' onChange={handleInput} /><br />

            <input type="submit" value="register" />
            <hr />
            name:{val.name} <br />
            age:{val.age} <br />
            city:{val.city} <br />
            contact:{val.contact} <br />
            email:{val.email} <br />

            




        </form>
        
        
        </>
    )

}
export default Form