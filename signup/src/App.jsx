import { Route, Routes } from "react-router-dom"
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Admin from "./Admin"
import { createContext } from "react"

let obj=createContext()
function App(){
 let  localdata=JSON.parse(localStorage.getItem('signup'))
  
  return(

    <>
    <obj.Provider value={localdata}>

    
    
    <Routes>
      <Route index element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/admin' element={<Admin/>}/>
      




    </Routes>

    </obj.Provider>
    </>
  )
}
export default App
export {obj}