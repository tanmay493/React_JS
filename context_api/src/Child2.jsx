import { xyz} from "./App"

function Child2(){
    return(
        <>
        <h1>Child 2</h1>
        <xyz.Consumer>
            {
                (a)=>{return <h1> this is {a} </h1>}
            }
        </xyz.Consumer>
        </>
    )

}
export default Child2