import React from 'react'

function Footer() {
  return (
    <div className='footer-cont'>
        <div className='footer-logo'>
            <h4>S & L Global<br /> Wholesale Club</h4>
            <h5>Beauty, Health, Value.</h5>
        </div>
        <div className='footer-faq'>
            <h6>Frequently Asked Questions</h6>
            <button>View</button>
        </div>
        <div className='footer-loca'>
            <span>Our Main Office:</span>
            <p>
                1 World Center <br />
                C153Y Avenida Balboa Suite 7810 <br />
                Panama City, Panama 0843
            </p>
        </div>
    </div>
  )
}

export default Footer