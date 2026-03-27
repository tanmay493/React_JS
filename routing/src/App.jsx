import { Route, Routes } from "react-router-dom"
import Home from './Home'

function App(){
  return(
    <>
    <h1>this is app page</h1>
    <Routes>
<Route path="/home" element={<Home/>}/>

    </Routes>
    </>
  )
}
export default App