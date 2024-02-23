import React from 'react';
import './Showall.css';
import backcover from '../Assets/taj_mahal_cover.jpg'

const Showall = () => {
  return (
    <div className='showall'>
      <div className="back_cover">
        <img src={backcover} alt="" />
      </div>
      <div className="search-box"> 
        <input type="text" placeholder='Search here...'/>
        <i className="fa-solid fa-magnifying-glass fa-sm"></i>
      </div>
    </div>
  )
}

export default Showall
