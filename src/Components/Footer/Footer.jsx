import React from 'react';
import './Footer.css';
import insta from '../Assets/instagram.png';
import linkedin from '../Assets/linkedin.png';
import twitter from '../Assets/twitter-sign.png';

const Footer = () => {
return (
    <div className='footer'>

    <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
        <div className="footer-social-icons">
            <div ><img src={insta} className="footer-icons-container" alt="" /></div>
            <div><img src={linkedin} className="footer-icons-container" alt="" /></div>
            <div><img src={twitter} className="footer-icons-container" alt="" /></div>
            {/* <ul>
                <li> <img src={insta} className='insta' alt="" /></li>
                <li> <img src={linkedin} alt="" /></li>
                <li> <img src={twitter} alt="" /></li>
            </ul> */}

        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @2024 - All rights reserved</p>
        </div>
    </div>
)
}

export default Footer;

