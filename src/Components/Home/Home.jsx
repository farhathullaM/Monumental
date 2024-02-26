import React from 'react';
import './Home.css';
import tajmahacover from '../Assets/pexels-fuzail-ahmad-9208715.jpg'
import Pagetwo from '../Pagetwo/Pagetwo';
import Pagethree from '../Pagethree/Pagethree';
import { Link } from 'react-router-dom';


const Home = () => {
return (
<>
    <div className='home'>
        <div className="background-img">
            <img src={tajmahacover} alt="" />
        </div>
        <div className="home-head">
            <h1>Let the World See</h1>
            <p>Discover the Wonders</p>
            <Link to='./explore'>
            <button className='discover-btn'>DISCOVER <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
        </div>
    </div>

    <Pagetwo/>
    <Pagethree/>
</>
)
}

export default Home;
