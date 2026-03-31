import { useNavigate } from "react-router-dom"
function About1(){
    let navigator=useNavigate()
     
    function nav(){
        navigator("/contact")
    }
return(
    <>
    <h1>about 1 page</h1>
    <button onClick={nav}>Contact Us</button>
    </>
)
}
export default About1