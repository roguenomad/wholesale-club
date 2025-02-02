import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='about-container'>
      <div>
      <img src={assets.faq} className='faq-header' alt="" />
        <span className='about-span'><b>How does the S&L Global Wholesale Club work to get the lowest prices and discounts?</b></span>
      </div>
      <div className='about-steps-cont'>
        <div  className='about-steps'>
        {/* <img src={assets.monjaro} className='main-image' alt="" /> */}
          <img src={assets.faq_pic_1} className='faq_pics' alt="" />
          <p>S&L negotiates the lowest price for our club members. Since we have a large customer base, many are more than eager to offer exceptional discount prices whiche we pass on to our members.</p>
        </div>
        <div  className='about-steps'>
        <img src={assets.faq_pic_2} className='faq_pics' alt="" />
          <p>You place your discounted order with S&L using our encripted ordering and payment portal.</p>
        </div>
      </div>
      <div className='about-steps-cont'>
        <div className="about-steps">
        <img src={assets.faq_pic_3} className='faq_pics' alt="" />
          <p>Supplier recieves your order. Your order is expedited & supplier fills your order.</p>
          <p>A global shipping company picks up your package. A tracking number is generated & sent to you. You can track the progress </p>
        </div>
        <div  className='about-steps'>
          <img src={assets.faq_pic_4} className='faq_pics' alt="" />
          <p>S&L processes your order, passes the porder directly to our suppliers</p>
          <p>You recieve confirmation of your order</p>
        </div>
        </div>
      
    </div>
  )
}

export default About