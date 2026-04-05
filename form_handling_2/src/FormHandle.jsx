import { useState } from "react";

function FormHandle(){
    let [frmdata,setFrmdata]=useState({})

    function handleInput(e){
        let{name,value}=e.target 
        setFrmdata({...frmdata,[name]:value})

    }

    function frmsubmit(e){
        e.preventDefault()
        console.log(frmdata);
        
    }
    
    return(
        <>
        <h1>this is form page</h1>
        <form action="" onSubmit={frmsubmit}>
        <label htmlFor="">name</label>
        <input type="text" name='name' onChange={handleInput}/><br /><br />
        <label htmlFor="">contact</label>
        <input type="text" name="contact" onChange={handleInput}/><br /><br />
        <label htmlFor="">city</label>
        <input type="text" name='city' onChange={handleInput} /><br /><br />
        <label htmlFor="">age</label>
        <input type="text" name='age' onChange={handleInput} /><br /><br />
        <label htmlFor="">state</label>
        <input type="text" name='state' onChange={handleInput} /><br /><br />
        <label htmlFor="">qualification</label>
        <input type="text" name='qualification' onChange={handleInput} /><br /><br />
        <label htmlFor="">income</label>
        <input type="text" name='income' onChange={handleInput} /><br /><br />

        

        
        
        <input type="submit" />

        </form>
        
        </>
    )

}
export default FormHandle