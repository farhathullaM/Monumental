import React from 'react';
import './Pagethree.css';
import one from '../Assets/pexels-pixabay-290386.jpg';
import two from '../Assets/pexels-daniela-ruiz-1042206.jpg';
import three from '../Assets/pexels-stijn-dijkstra-2659475.jpg';

const Pagethree = () => {
  return (
    <div className='pagethree'>
        <div className="page-head">
            <h3>Newly Addedd Places</h3>
        </div>
        <div className="image-container">
            <img className='img-one' src={one} alt="" />
            <img className='img-two'src={two} alt="" />
            <img className='img-three'src={three} alt="" />
        </div>
        <div className="more-btn-div">
        <button className='more-btn'>More <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Pagethree;
