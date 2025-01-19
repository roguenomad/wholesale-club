import React from 'react'

const About = () => {
  return (
    <div className='about-container'>
      <div>
        <h2>FAQ</h2>
        <span className='about-span'><b>How does the S&L Global Wholesale Club work to get the lowest prices and discounts?</b></span>
      </div>
      <div className='about-steps-cont'>
        <div  className='about-steps'>
        {/* <img src={assets.monjaro} className='main-image' alt="" /> */}
          <span>1</span>
          <p>S&L negotiates the lowest price for our club members. Since we have a large customer base, many are more than eager to offer exceptional discount prices whiche we pass on to our members.</p>
        </div>
        <div  className='about-steps'>
          <span>2</span>
          <p>You place your discounted order with S&L using our encripted ordering and payment portal.</p>
        </div>
      </div>
      <div className='about-steps-cont'>
        <div className="about-steps">
          <span>4</span>
          <p>S&L processes your order, passes the porder directly to our suppliers</p>
          <p>You recieve confirmation of your order</p>
        </div>
        <div  className='about-steps'>
          <span>3</span>
          <p>Supplier recieves your order. Your order is expedited & supplier fills your order.</p>
          <p>A global shipping company picks up your package. A tracking number is generated & sent to you. You can track the progress </p>
        </div>
        </div>
      
    </div>
  )
}

export default About