import React from 'react';
import './Pagetwo.css';
import img1 from '../Assets/pexels-pixabay-208277.jpg';
import img2 from '../Assets/pexels-pixabay-218480.jpg';



const Pagetwo = () => {
  return (
    <div className='pagetwo'>
      <div className="section-1">
          <div className="image-sec">
            <img src={img2} alt="" />
          </div>
          <div className="details-sec">
            <h2>Miskhal Masjid</h2>
            <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            <button className='more-btn'>More <i class="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>

            <div className="section-2">

          <div className="details-sec">
            <h2>Miskhal Masjid</h2>
            <p>Mishkal Mosque is a medieval mosque located in Calicut on Malabar Coast, souther India. The mosque, one of the few surviving medeival mosques in Keerala, is regarded as an important cultural, historical and archtectural monument of Kerala</p>
            <button className='more-btn'>More <i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="image-sec">
            <img src={img1} alt="" />
          </div>
      </div>

      {/* <div className="next-page-heading">
        <h3>Newly Addedd Places</h3>
      </div> */}
    </div>
  )
}

export default Pagetwo