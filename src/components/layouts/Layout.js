import Header from './Header.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';

import './Layout.css';


function Layout(props){
    return (
        <div>
        <Header/>
        <NavBar/>
        <div>
         {props.children}
         </div>
         <Footer/>
    </div>
    
    )
    }
    
    export default Layout;