function Child1a(props){
    // let{n}=props  yadi yaha destructure
    return(
 <>
 <h1>child of child1 is {props.name}</h1>  {/*yadi props destructure kiya toh 
joh n variable hai {props.name} jagah sirf {n} likhna padega  */}
 </>

    )

}
export default Child1a;