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
                    <h4>Fast Free Delivery</h4>
                    <p className='card-p'>International shipping can be confusing and complicated. We have years of experience dealing with global carriers to ensure faster delivery.</p>
                </div>
                <div className="card">
                    <div className='hexagon'>
                        <img src={assets.reliability} className='card-icon' alt="" />
                    </div>
                    <h4>Reliability</h4>
                    <p className='card-p'>Our purpose is to ensure you recieve the finest quality name brands. We work closely with the manufacturers, distributors and pharmacies.</p>
                </div>
                <div className="card">
                    <div className='hexagon'>
                        <img src={assets.safety} className='card-icon' alt="" />
                    </div>
                    <h4>Guarantee</h4>
                    <p className='card-p'>All products are manufactured in accordance with industry set standards, using only quality assured ingredients.</p>
                </div>
            </div>
       
        </div>
        
    </div>
  )
}

export default Cards