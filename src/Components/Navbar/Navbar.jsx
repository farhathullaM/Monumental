import React from 'react';
import './Navbar.css';
import logo_new from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    //const [menu, setMenu] = useState("home");
return (
<div className='navbar'>
    <div className="nav-logo">
        <img src={logo_new} alt="" />
        <p>History</p>
    </div>
    <ul className='nav-menu'>
        <li> <Link to='/login' style={{textDecoration: 'none'}}>Login </Link></li>
        <li>Contact us</li>
        <li>Explore</li>
        <li>Blogs</li>
    </ul>
    <div className='menu'></div>
</div>
)
}

export default Navbar;
