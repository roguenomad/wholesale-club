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
                    <p>At S&L Global Wholesale Club, we are committed to offering high-quality products that are both affordable and accessible. Our journey began in 2020, driven by our founders’ recognition of the limited options available to budget-conscious consumers and the excessive markups on globally sourced products. Today, we proudly provide a diverse selection of products at unbeatable wholesale prices, making quality accessible to all.</p>
                </div>
                <div className="info-about-text">
                    <h5>Our Mission</h5>
                    <p>We aim to empower everyone by providing access to affordable, high-quality products. Believing that essential treatments shouldn’t be reserved for the wealthy, we source globally and negotiate for the safest, most cost-effective options. Our commitment is to reduce costs while delivering the trusted products you need at unbeatable prices.</p>
                </div>
            </div>
            <div className='info-links'>
                <div className="info-link grow">
                    <img src={assets.vic1} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Weight Loss</h4>
                    <Link to='/'><button className='info-link-btn'>View</button> </Link>
                </div>
                <div className="info-link grow">
                    <img src={assets.cen_soft_100} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Impotence</h4>
                    <button className='info-link-btn'>View</button>
                </div>
                <div className="info-link grow">
                    <img src={assets.rin_1} className='info-link-img' alt="" />
                    <h4 className='info-link-text'>Chronic Diseases</h4>
                    <button className='info-link-btn'>View</button>
                </div>
                <div className="info-link grow">
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