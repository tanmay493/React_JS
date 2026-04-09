// Route path -> url jaisa use hoga
// Route element  -> it means url hit karne par jo name diya hai woh jsx file show hoga
// index element -> it means yeh default page ko show karega 
import { Route, Routes } from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Layout from "./Layout"
import Home from "./Home"
function App(){
    return(
        <>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>








            </Route>

        </Routes>
        </>
    )
}
export default App
