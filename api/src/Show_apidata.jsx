import { useEffect, useState } from "react"
import axios from "axios"

function Show(){
   let [apidata,setApidata]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3000/userdata')
        //  .then((e)=>console.log(e.data)
         .then((e)=>setApidata(e.data)
        .catch((e)=>alert("error",e))
        )},[mydel])   // mydel dependency nahi lagyenge toh refresh karne par change nazar aayega dependency me variable ya function likhne
    
    function mydel(id){
        axios.delete(`http://localhost:3000/userdata/${id}`)
        .then((e)=>alert("deleted"))
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

                    </tr>
                    </tbody>
                ))
            }

        </table>
        
        </>

    )
}
export default Show