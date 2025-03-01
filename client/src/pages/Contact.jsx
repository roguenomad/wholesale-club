import React from 'react'
import { assets } from '../assets/assets'

const Content = () => {
  return (
    <div className='cont-head'>
      <div className='cont-header'>
      <h2>Support</h2>
      </div>
      <div className='cont-content'>
        <div className='cont-text'>
          <h6>Contact Us</h6>
          <h3>Get in Touch</h3>
          <p>Sometimes you just need to reach out and get information. Then again, you may have questions. We are here to help. Submit the information form and we will respond as quickly as possible.</p>
        </div>
        <div className='form-border'>
          <form className='form-cont'>
            <input type="text" id="fname" name="fname" placeholder='Name'/>
            <input type="email" id="email" name="email" placeholder='Email'/>
            <input type="text" id="order-num" name="order-num" placeholder='Order Number'/>
            {/* <input type="textarea" id="textarea" name="message" rows='10'cols='70' placeholder='Message'/> */}
            <textarea placeholder='Message' rows='5'></textarea>
            <input type="submit" id="sub-button" name="sub-button"/>
          </form>
          {/* <textarea>MEssage</textarea> */}
          {/* <button>Submit</button> */}
        </div>
      </div>
      <div className='cont-bott'>
          <img src={assets.sl_map} className='cont-img' alt="" />
          <img src={assets.wtc} className='cont-img' alt="" />
          <img src={assets.pan_map} className='cont-img' alt="" />
      </div>
    </div>
  )
}

export default Content