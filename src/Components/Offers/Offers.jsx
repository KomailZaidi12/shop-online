import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
export const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h2>Offers for you</h2>
            <p>ONLY ON BEST SELLER PRODECTS</p>
            <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="" />
        </div>

    </div>
  )
}
