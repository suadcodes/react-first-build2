import Header from './Header.js';
import Footer from './Footer.js';
import NavBar from './NavBar.js';

import './Layout.css';


function Layout(props){
    return (
        <div className="centrepane">
        <Header/>
        <NavBar/>
        <div>
            <main>
            {props.children}
            </main>
         </div>
         <Footer/>
    </div>
    
    )
    }
    
    export default Layout;