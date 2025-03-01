import React from 'react'
import { assets } from '../assets/assets'

const FeaturedBrands = () => {
  return (
    <div className='fb-container'>
      <h1>Featured Brands</h1>
      <div className='fb-brands-list'>
        <div className='fb-text'>
          <b><span>Our Approved Partners & Vendors</span></b>
          <p>This is not an exhaustive list, but here are some of the leading manufacturers behind the high-quality products we offer.</p>
        </div>
        <div className='fb-logos'>
        <img src={assets.amgen} className='fb-image' alt="" />
        <img src={assets.astrazeneca} className='fb-image' alt="" />
        <img src={assets.bayer} className='fb-image' alt="" />
        <img src={assets.johnson} className='fb-image' alt="" />
        <img src={assets.merck} className='fb-image' alt="" />
        <img src={assets.mounj} className='fb-image' alt="" />
        <img src={assets.nova} className='fb-image' alt="" />
        <img src={assets.pfizer} className='fb-image' alt="" />
        <img src={assets.pharma} className='fb-image' alt="" />
        <img src={assets.pharPart} className='fb-image' alt="" />
        <img src={assets.rin_logo} className='fb-image' alt="" />
        <img src={assets.scherPlo} className='fb-image' alt="" />
        <img src={assets.victoza} className='fb-image' alt="" />
        </div>
      </div>
    </div>
  )
}

export default FeaturedBrands