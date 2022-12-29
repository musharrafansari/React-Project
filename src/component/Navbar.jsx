
import './Navbar.css';
import Logo from '../images/logo.png'


function Navbar() {



  return (
    <>
    <div className='header'>
    <nav className='main-nav'>
    <div><img className="logo-img" src={Logo} alt="logoImg"/></div>
    <div className='logo'>
 
    </div>

    <div className='menu'>
    <ul className='nav-menu'>
    <li>
    <a href='/'>  Home</a>
    </li>
    <li>
    <a href='About'>  About</a>
    </li>
    <li>
    <a href='Pricing'> Pricing</a>
    </li>
    <li>
    <a href='Program'>  Program</a>
    </li>
    </ul>
    </div>

    <div>
    <button className='btn'><span> Register </span></button>
    </div>   
    </nav>
    </div>

    </>
   
  );
}

export default Navbar;
