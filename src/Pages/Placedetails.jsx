import React, {useEffect, useState} from 'react';
import './CSS/Placedetails.css';
import { useParams } from 'react-router-dom';
import star from '../Components/Assets/star.png';
import one from '../Components/Assets/pexels-pixabay-290386.jpg';
import two from '../Components/Assets/tajgate.jpg';
import three from '../Components/Assets/tajmahal.jpg';


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

const Placedetails = () => {

    const { placeId } = useParams();

    const [monument, setMonument] = useState({})

    useEffect(() => {
       fetch('https://farhathullam.github.io/json-api/all_places.json')
         .then(res => res.json())
         .then(data => {
          const monu = data.find(item => item.id === parseInt(placeId));
            setMonument(monu)
         })
         .catch(error => console.error(error))
       },[]);

    // const place = places.find(item => item.id === parseInt(placeId));
  
    // if (!place) {
    //   return <div>Place not found</div>;
    // }


  return (
    <div className="place-details">
        <div className="place-img">
        <img src={monument.image} alt="" />
        <div className='name-loc'>
          <h2>{monument.name}</h2>
          <p><i className="fa-solid fa-location-dot"></i> {monument.place}, {monument.state}</p>
        </div>
      </div>

      <div className="importance">
        <div className="top">
          <img src={star} alt="" />
          <h4>Importance</h4>
        </div>
       <ReadMore> {monument.importance}</ReadMore>
      </div>

      <div className="about-monument">
        <h4>About Monument</h4>
        <div className="line"></div>
        <p>{monument.about}</p>
      </div>

      <div className="about-monument">
        <h4>PRESENT CONDITION</h4>
        <div className="line"></div>
        <p>{monument.present}</p>
      </div>

      <div className="about-monument">
        <h4>PAST CONDITION</h4>
        <div className="line"></div>
        <p>{monument.past}</p>
      </div>

      <div className="arch-imp">
        <h4>Architectural Importance</h4>
        <p>{monument.architectural}</p>
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

export default Placedetails;
