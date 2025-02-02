import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Cards = () => {

  return (
    <div className='card-main'>
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
                    <p className='card-p'>We distribute products made to meet strict industry standards, ensuring safe, effective, and reliable options for your health care needs.</p>
                </div>
       
        </div>

        {/* <div className="card-prod-container">
            <div className='card-prod-head'>
                <h3>Our Products</h3>
                <span>We have your favorite products at over 55% to 85% savings. Order now while supplies last.</span>
                <Link to='/Shop' className='all-pro-but'>View All</Link>
            </div>
            <div className="card-products">
                <div className='card-product'>
                    <img src={assets.vic2} className='card-pro-img' alt="" />
                    <img src={assets.victoza} className='card-pro-img' alt="" /><br></br>
                    <span>For Weight Loss</span> <br></br>
                    <span className='price-strike'>$1,015.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
                <div className='card-product'>
                    <img src={assets.monjaro} className='card-pro-img' alt="" />
                    <img src={assets.mounj} className='card-pro-img' alt="" /><br></br>
                    <span>For Weight Loss</span><br></br>
                    <span className='price-strike'>$1,208.00</span>
                    <span>$549.00</span><br></br>
                    <button>Add to Cart</button>
                </div>
            </div>
        </div> */}
        
    </div>

  )
}

export default Cards