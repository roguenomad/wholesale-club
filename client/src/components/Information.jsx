import React from 'react'
import { assets } from '../assets/assets'
import { Link }  from 'react-router-dom'
// import '../App.css'

const Information = () => {
  return (
    <div className='info-container'>
        <h3>Information</h3>
            <div className="info-content">
            <img src={assets.infoImage} className='info-img' alt="" />
            <div className="info-about">
                <div className="info-about-text">
                    <h5>Our Story</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue consequat, malesuada mi ut, pharetra nunc. Praesent sagittis posuere convallis. Aliquam elementum, risus sed luctus viverra, tellus sapien pulvinar mauris, non ornare dolor nibh sit amet purus.</p>
                </div>
                <div className="info-about-text">
                    <h5>Our Mission</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a augue consequat, malesuada mi ut, pharetra nunc. Praesent sagittis posuere convallis. Aliquam elementum, risus sed luctus viverra, tellus sapien pulvinar mauris, non ornare dolor nibh sit amet purus.</p>
                </div>
            </div>
            <div className='info-links'>
                <div className="info-link">
                    <img src={assets.monjaro} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Weight Loss</h4>
                    <Link to='/'><button className='info-link-btn'>View</button> </Link>
                </div>
                <div className="info-link">
                    <img src={assets.monjaro} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Impotence</h4>
                    <button className='info-link-btn'>View</button>
                </div>
                <div className="info-link">
                    <img src={assets.monjaro} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Long-term</h4>
                    <button className='info-link-btn'>View</button>
                </div>
                <div className="info-link">
                    <img src={assets.monjaro} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Future Care</h4>
                    <button className='info-link-btn'>View</button>
                </div>   
            </div>

        </div>
    </div>
  )
}

export default Information