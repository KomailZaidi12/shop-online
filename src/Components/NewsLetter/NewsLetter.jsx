import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
    return (
    <div className='newsletter'>
        <h1>Get offer On Your Email</h1>
        <p>Subscribe to our Newsletter and stay update</p>
        <div>
            <input type="email" placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}
