import { Route,Routes } from "react-router-dom"
import Show from "./Show_apidata"
import Insert from "./Insert"
function App(){
  return(
    <>
    {/* <Show/> */}
    <Routes>
      <Route index element ={<Insert/>}/>
      <Route path="/show" element={ <Show/>}/>


    </Routes>
    
    </>
  )
}
export default App