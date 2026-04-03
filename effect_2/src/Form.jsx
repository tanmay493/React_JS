function Form(){
    function demo(e){
        console.log(e.target.value)
    }

    return(
        <>
        <h1>this is form page</h1>
        <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={demo} />

        <input type="submit" />
        </form>
        </>
    )

}
export default Form