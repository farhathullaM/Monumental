import React,{ useState} from 'react';
import './Popular.css';
import head from '../Assets/head.jpg';
import star from '../Assets/star.png';
import { Link } from 'react-router-dom';
import one from '../Assets/pexels-pixabay-290386.jpg';
import two from '../Assets/tajgate.jpg';
import three from '../Assets/tajmahal.jpg';

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
  };
  return (
      <p className="text">
          {isReadMore ? text.slice(0, 600) : text}
          <span
              onClick={toggleReadMore}
              className="read-or-hide"
              style={{ color: "rgba(153, 153, 153, 1)" }}
          >
              {isReadMore ? " Read more..." : " Show less"}
          </span>
      </p>
  );
};

const Popular = () => {
  return (
    <div className='popular'>

      <div className="place-img">
        <img src={head} alt="" />
        <div className='name-loc'>
          <h2>Tali Maha Shiva Kshetram</h2>
          <p><i className="fa-solid fa-location-dot"></i> Agra, India</p>
        </div>
      </div>

      <div className="importance">
        <div className="top">
          <img src={star} alt="" />
          <h4>Importance</h4>
        </div>
        <p>Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..</p>
      </div>

      <div className="about-monument">
        <h4>About Monument</h4>
        <div className="line"></div>
        <ReadMore>Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh. Hear about National Geographic Grantee projects working to conserve endangered wildlife in Vietnam and Laos, and join an archaeologist to explore the ancient, crumbling temples at mystical Angkor.Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..</ReadMore>
      </div>

      <div className="about-monument">
        <h4>PRESENT CONDITION</h4>
        <div className="line"></div>
        <ReadMore>Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh. Hear about National Geographic Grantee projects working to conserve endangered wildlife in Vietnam and Laos, and join an archaeologist to explore the ancient, crumbling temples at mystical Angkor.Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..</ReadMore>
      </div>

      <div className="about-monument">
        <h4>PAST CONDITION</h4>
        <div className="line"></div>
        <ReadMore>Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh. Hear about National Geographic Grantee projects working to conserve endangered wildlife in Vietnam and Laos, and join an archaeologist to explore the ancient, crumbling temples at mystical Angkor.Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..</ReadMore>
      </div>

      <div className="arch-imp">
        <h4>Architectural Importance</h4>
        <p>Delve into the treasures of Southeast Asia, where rural villages, ancient temples, and French colonial cities weave a cultural mosaic that is vibrant and timeless. Contrast Ho Chi Minh City’s neon-lit streets with charming, traditional Hanoi and its intoxicating Old Quarter, then set out into the Vietnamese countryside to discover the spectacular karst landscapes of Ninh Binh..</p>
      </div>

      <div className='gallery'> 
        <h4>GALLERY</h4>
        <div className="line"></div>
      </div>

      <div className='pagethree'>
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

        <div className="map-div">
          <div className="map">
            
          </div>
        </div>
    </div>

    </div>
  )
}

export default Popular;
