import React from 'react';
import tajmahacover from '../Assets/pexels-fuzail-ahmad-9208715.jpg'
import { Link } from 'react-router-dom';
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="background-img">
            <img src={tajmahacover} alt="" />
        </div>
        <div className="hero-head">
            <h1>Let the World See</h1>
            <p>Discover the Wonders</p>
            <Link to='./explore'>
            <button className='discover-btn'>DISCOVER <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
        </div>
    </div>
  )
}

export default Hero;
