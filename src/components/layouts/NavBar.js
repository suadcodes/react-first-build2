import { NavLink } from 'react-router-dom';
import './NavBar.css';
function NavBar() {
  // Properties ----------------------------------
  // Hooks ---------------------------------------
  // Context -------------------------------------
  // Methods -------------------------------------
 const getLinkStyle = ({isActive}) => (
 isActive? 'navSelected' : null

 );

  // View ----------------------------------------
  return (
    <nav>
      <div className="navItem">
        <NavLink to='/' className={getLinkStyle}>Home </NavLink>
      </div>
      <div className="navItem">
      <NavLink to='/signin' className={getLinkStyle}>Sign in</NavLink>
      </div>
      <div className="navItem">
      <NavLink to='/contact' className={getLinkStyle}>Contact Us</NavLink>
      </div>
    </nav>
  )
}
export default NavBar;