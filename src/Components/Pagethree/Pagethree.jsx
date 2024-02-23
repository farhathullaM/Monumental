import React from 'react';
import './Pagethree.css';
import one from '../Assets/pexels-pixabay-290386.jpg';
import two from '../Assets/tajgate.jpg';
import three from '../Assets/tajmahal.jpg';

const Pagethree = () => {
  return (
    <div className='pagethree'>
        <div className="page-head">
            <h3>Newly Addedd Places</h3>
        </div>
        <div className="image-container">

          <div className="img-one-div">
            <img className='img-one' src={one} alt="" />
            <div className="detail">
            <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-two-div">
            <img className='img-two'src={two} alt="" />
            <div className="detail">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>

          <div className="img-three-div">
            <img className='img-three'src={three} alt="" />
            <div className="detail">
              <div className="line"></div>
              <h2>Miskhal Masjid</h2>
              <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            </div>
          </div>            
            
        </div>
        <div className="more-btn-div">
        <button className='more-btn'>More <i class="fa-solid fa-arrow-right"></i></button>
        </div>
    </div>
  )
}

export default Pagethree;