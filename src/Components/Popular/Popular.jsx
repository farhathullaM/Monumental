import React from 'react';
import './Popular.css';
import taj from '../Assets/tajmahal.jpg';
import tajfull from '../Assets/tajgate.jpg';


const Popular = () => {
  return (
    <div className='Popular'>
        <h1>Popular Monuments</h1>
        <p>Hisotrically important monuments which stands as a pride of culture</p>

        <div className="taj-mahal">
            <div className="loc-txt">
                <h2>Taj Mahal, New Delhi</h2>
                <p>The Taj Mahal, a masterpiece of architectural elegance and a symbol of enduring love, stands as a testament to human creativity and devotion. Located in Agra, India, this ivory-white marble mausoleum was commissioned by the Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal.Completed in 1653, the Taj Mahal is a harmonious blend of various architectural styles, including Persian, Islamic, and Indian influences. Its breathtaking symmetry and intricate detailing reflect the dedication of thousands of skilled artisans and craftsmen who brought Shah Jahan's vision to life. The central dome, flanked by four minarets, creates a striking silhouette against the sky, while the reflective pool adds to its ethereal beauty.</p>

                <div className="images">
                    <img src={taj} alt="" />
                    <img src={tajfull} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Popular;
