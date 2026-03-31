import { Link, Route, Routes } from "react-router-dom"
import Home from './Home'
import About from "./About"
import Contact from "./Contact"
import Register from "./Register"
import Service from "./Service"
import About1 from "./About1"

function App(){
  return(
    <>
    <Link to="/">Home|</Link>
    <Link to='/about'>About|</Link>
    <Link to='/contact'>Contact|</Link>
    <Link to='/service'>Service|</Link>
    <Link to='/register'>Register|</Link>



   
    <Routes>
<Route path="/home" element={<Home/>}/>
<Route index element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>} />
<Route path="/register" element={<Register/>}/>
<Route path="/service" element={<Service/>}/>
<Route path="/about1" element={<About1/>}/>


    </Routes>
    </>
  )
}
export default App