import Child1a from "./Child1a";
const Child1=(props)=>{
let{name,age}=props
    return(
        <>
    
        <h1> child1 my name is {name} and age is{age}</h1>
        <hr />
        <Child1a name="Cybrom"/>
        </>
    )
}
export default Child1;