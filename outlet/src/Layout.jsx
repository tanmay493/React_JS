//Link -> yeh anchor tag jaisa  jisme href uske jaise kaam karega
//Outlet-> isme layout ke child components show hongey yeh ek placeholder hai
// BrowserRouter -> without reload huye ek page se dusre
                    //  page navigate(travel) kar sake
                    // Routing enable karne ke liye
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
