import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-img-content'>
        <h3>Where beauty, health, and value come together.</h3>
        <img src={assets.mainImage} className='main-image' alt="" />
      </div>
      <div className='main-content'>
          <h1 className='main-header'>The Global Choice <br/>for Affordable <br/> Health</h1>
          <Link to='/Shop' className='all-pro-but'>All Products</Link>
          {/* <button className='all-pro-but'><span>See All Products</span></button> */}
          <p>Featuring: Ozempic, Victoza, Wegovy, Mounjaro, Saxenda at 50% to 65% off major pharmacy prices. We have the largest selection of Erectile Dysfunction products at massive discounts. We also feature solutions for chronic diseases.</p>
      </div>
    </div>
  )
}

export default Hero