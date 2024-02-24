import React, { useState, useEffect} from 'react';
import './Showall.css';
import backcover from '../Assets/taj_mahal_cover.jpg'

const Showall = () => {

  const [loading, setLoading] = useState(true)
  const [blogs, setBlogs] = useState([]);
 
   useEffect(() => {
    setLoading(true);
     fetch('https://farhathullam.github.io/json-api/all_places.json')
       .then(res => res.json())
       .then(data => setBlogs(data))
       .catch(error => console.error(error));
    setLoading(false)
     },[]);

  return (
    <div className='showall'>
      <div className="back_cover">
        <img src={backcover} alt="" />
        <div className="search-box"> 
        <input type="text" placeholder='Search here...'/>
        <div className="search-icon-box">
          <i className="fa-solid fa-magnifying-glass fa-sm"></i>
        </div>
      </div>
      </div>
      

      <div className="every-places">
      {loading ? 'Loading...' :(
          <div className="each-places">
            {blogs && blogs.map(item => (
              <div className="item" key={item.id}>
                <img src={item.image} alt="" />
                <p className='title'>{item.name}</p>
                <p className='place'><i class="fa-solid fa-location-dot"></i> {item.place}, {item.state}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  )
}

export default Showall
