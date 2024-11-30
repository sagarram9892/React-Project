import React from 'react'
import "./Hero.css"
import dark_arrow from "../../assets/dark-arrow.png"

function Hero() {
  return (
    <div className='hero container'>
     <div className="hero-text">
     <h1>We Ensure better education for a better world</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat iure esse placeat, doloribus unde debitis, eos rerum cupiditate dignissimos iste consectetur sint et natus ducimus?</p>
      <button className='btn'>Explore More <img src={dark_arrow} alt="" /> </button>
     </div>
    </div>
  )
}

export default Hero
