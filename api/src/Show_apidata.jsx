// e-> response object:-जब तुम React से API call करते हो (जैसे fetch() या Axios), तो server तुम्हें जो data वापस भेजता है, उसे response object कहते हैं।
// Example:Button click → event object and API call → response object
/* Axios में:
res.data → actual data
res.status → status code
res.headers → headers
*/ 
import { useEffect, useState } from "react"
import axios from "axios"

function Show(){
    let [show,setShow] =useState(false)
    let [editdata,setEditdata] = useState([])
   let [apidata,setApidata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        //  .then((e)=>console.log(e.data))
         .then((e)=>setApidata(e.data)
        .catch((e)=>alert("error",e))
        )},[mydel])   // mydel dependency nahi lagyenge toh refresh karne par change nazar aayega dependency me variable ya function likhne
    
    function mydel(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("deleted"))
    }

    function handleedit(e){
        const {name,value} = e.target
        setEditdata({...editdata,[name]:value})
    }
    function handlesubmit(e){
        e.preventDefault()
        axios.put(`http://localhost:3000/userdata/${editdata.id}`,editdata)
        .then((e)=>alert("updated....."))

        setShow(false)
    }
    return(
        <>
        <table border="">
           <thead>
            <tr>
                
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Contact</th>
                <th>Delete</th>

            </tr>
            </thead>
            {
                apidata.map((e)=>(
                    <tbody>
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.age}</td>
                        <td>{e.city}</td>
                        <td>{e.contact}</td>
                        <td><button onClick={()=>mydel(e.id)}>Delete</button></td>
                        <td><button onClick={()=>(setShow(true),setEditdata(e))}>Edit</button></td>

                    </tr>
                    </tbody>
                ))
            }

        </table>

        {show && <form onSubmit={handlesubmit}>
      
          <input type="text" value={editdata.id} name="id" onChange={handleedit} hidden /> <br /><br />

          <label htmlFor="">Name</label>   
          <input type="text" value={editdata.name} name="name" onChange={handleedit} /> <br /><br />

          <label htmlFor="">age</label>   
          <input type="text" value={editdata.age} name="age" onChange={handleedit} /> <br /><br />

          <label htmlFor="">city</label>   
          <input type="text" value={editdata.city} name="city" onChange={handleedit} /> <br /><br />

          <label htmlFor="">contact</label>   
          <input type="text" value={editdata.contact} name="contact" onChange={handleedit} /> <br /><br />

          <input type="submit" />


             
        </form>}
        
        </>

    )
}
export default Show