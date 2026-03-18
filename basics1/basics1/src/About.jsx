import abc from "./assets/hero.png"
function About(){
    return(
        <>
        <h1>this is about page</h1>
        <img src="favicon.svg" alt="" />
        <hr />
        <img src="Screenshot (2).png" height={"100px"} alt="" />
        <hr />
        <img src={abc} alt=""  height={"100px"}/>
        </>


    )
}
export default About;