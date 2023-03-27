import React from 'react'
import Carditem from './Carditem'
import './cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destination</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <Carditem src="image/image-01.jpg" 
                text="Explore Bali, Indonesia"
                label="Adventure"
                path="/services"
                />
                <Carditem src="image/image-02.jpg" 
                text="Explore Marrakesh, Morocco"
                label="Adventure"
                path="/services"
                />
            </ul>
            <ul className="cards__items">
                <Carditem src="image/image-03.jpg" 
                text="Explore Bali, Indonesia"
                label="Adventure"
                path="/services"
                />
                <Carditem src="image/image-04.jpg" 
                text="Explore Paris, France"
                label="Adventure"
                path="/services" />
            </ul>
            <ul className="cards__items">
                <Carditem src="image/image-05.jpg" 
                text="Explore Bora Bora, French Polynesia"
                label="Adventure"
                path="/services"
                />
                <Carditem src="image/image-06.jpg" 
                text="Explore Edinburgh, Scotland"
                label="Adventure"
                path="/services"
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
