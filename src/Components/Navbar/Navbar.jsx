import React from 'react';
import './Navbar.css';
import logo_new from '../Assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

    let isNavOpen = false;
function toggleNav(){
    const navMenu = document.querySelector(".nav-menu")
    const closeButton = document.querySelector(".menu-icons .fa-times")
    const menuButton = document.querySelector(".menu-icons .fa-bars")
    if(isNavOpen){
        
        navMenu.classList.remove("nav-open")
        isNavOpen = false
        closeButton.style.display = "none"
        menuButton.style.display = "block"
    } 
    else{
        
        navMenu.classList.add("nav-open")
        isNavOpen = true
        closeButton.style.display = "block"
        menuButton.style.display = "none"
    } 
}

return (
    <nav className='navbar'>
        
        <div className="nav-logo">
            <img src={logo_new} alt="" />
            <h1>History</h1>
        </div>

        <div className="menu-icons" onClick={toggleNav}>
            <i className='fa-solid fa-bars fa-lg' style={{color: 'black'}}></i>
            <i className='fa-solid fa-times fa-lg' style={{color: 'black'}}></i>
        </div>

        <ul className='nav-menu'>
            <li> <Link to='/' className='navlink'> <i className="fa-solid fa-house-chimney"></i> Home </Link> </li>
            <li> <Link to='/login' className='navlink'> <i className="fa-solid fa-right-to-bracket"></i> Login </Link> </li>
            <li> <Link to='/about' className='navlink'> <i className="fa-solid fa-address-card"></i> About us </Link> </li>
            <li> <Link to='/' className='navlink'> <i class="fa-solid fa-blog"></i> Blogs </Link> </li>
        </ul>

    </nav>
)
}

export default Navbar;
