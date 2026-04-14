import { useContext } from "react";
import { mainob } from "./main";

function About(){
    let val=useContext(mainob) // object return karega val variable
    // let {name,age,contact}=useContext(mainob) // destructured object
    return(
        <>
        <hr />
        <h1>About page {val.name},{val.age},{val.contact}</h1>
         {/* <h1>About page {name},{age},{contact}</h1>
         */}
        </>
    )
}
export default About