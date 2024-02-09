import React from 'react';
import './Home.css';
import coverimg from '../Assets/img1.jpg';

const Home = () => {
return (
    <div className='home'>
        <img src={coverimg} alt="" />
        <div className="home-txt">
            <h1>Let the World See</h1>
            <p>Discover the wonders of everywhere</p>
            <a href="/">Locality</a>
        </div>
    </div>
)
}

export default Home;
