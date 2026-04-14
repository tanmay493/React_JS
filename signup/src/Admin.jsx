import { useContext } from "react"
import { obj } from "./App"
import { Link, Outlet } from "react-router-dom"


function Admin(){
     let obj1=useContext(obj)
    return(

        <>
        {/* <h2>hi {obj.name} and {obj.value}</h2> */}
    
        <h2>hello {obj1.name}</h2>
        <nav>
            <ul style={{display:'flex', justifyContent:'space-around', listStyle:'none' ,backgroundColor:'yellow', height:'30px'}}>
                <li><Link to='/home'> Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
        <main>
            
            <Outlet/>
        </main>
        </>
    )
}
export default Admin