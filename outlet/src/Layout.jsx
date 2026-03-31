import {Link,Outlet} from "react-router-dom"
function Layout(){
    return(
 <>
 <nav>
    <h1> LOGO</h1>
    <ul style={{height:'200px'}}>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
 </nav>
 
 <main style={{height:'300px'}} >
<Outlet/>

 </main>
 
<footer>

    <h1>footer </h1>
</footer>

 </>
    )
}
export default Layout