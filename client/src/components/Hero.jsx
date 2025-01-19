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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue consequat, malesuada mi ut, pharetra nunc. Praesent sagittis posuere convallis. Aliquam elementum, risus sed luctus viverra, tellus sapien pulvinar mauris, non ornare dolor nibh sit amet purus.</p>
      </div>
    </div>
  )
}

export default Hero