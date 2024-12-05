import React from 'react'
import { assets } from '../assets/assets'

const Cards = () => {
  return (
    <div className='card-main'>
        <div className='card-container'>
            <div className="cards">
                <div className="card">
                    <div className='hexagon'>
                        <img src={assets.delivery} className='card-icon' alt="" />
                    </div>
                    <h4>Fast, Free Delivery You Can Count On</h4>
                    <p className='card-p'>With years of experience working with global carriers, we simplify international shipping to ensure your orders arrive quickly and hassle-free.</p>
                </div>
                <div className="card">
                    <div className='hexagon'>
                        <img src={assets.reliability} className='card-icon' alt="" />
                    </div>
                    <h4>Trusted Quality Name-Brand Products</h4>
                    <p className='card-p'>We partner with top manufacturers, distributors, and pharmacies to deliver reliable, premium-quality same name brands that you know and trust.</p>
                </div>
                <div className="card">
                    <div className='hexagon'>
                        <img src={assets.safety} className='card-icon' alt="" />
                    </div>
                    <h4>Guaranteed Quality with Every Product</h4>
                    <p className='card-p'>We distribute products made with rigorously tested ingredients and produced to meet strict industry standards, ensuring safe, effective, and reliable options for your health needs.</p>
                </div>
            </div>
       
        </div>
        
    </div>
  )
}

export default Cards