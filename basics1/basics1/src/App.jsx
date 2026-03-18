import About from "./About";
function App(){
  let studentname="richa";
  let person={name:"tanmay",age:22,city:"bhopal"};
  let ar=["shiva",4.5,"rewa"]
  return(
    <>
    <h1>my name is {studentname}</h1>
    <h1>my name is{person.name} and my age is{person.age}</h1>
    <h1>my name is {ar[0]} and my city is {ar[2]}</h1>
    <hr />
    <About/>
    
    </>

  )
}

export default App;