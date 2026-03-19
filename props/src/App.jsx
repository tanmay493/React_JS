import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
function App(){
  let person={
    name:"tanmay",age:30,city:"bhpl"
  }
  return(
    <>
    <h1>This is app-page props</h1>
    <hr />
    <Child1 name="tom" age ={90} />
    <hr />
    <Child2 city="bhopal"/>
    <hr />
    <Child3 userdata={person}/>
    </>
  )


}
export default App