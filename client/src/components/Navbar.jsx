import { React, useState } from 'react'
import { assets } from '../assets/assets'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {

  // const [visible,setVisible] = useState(false);

  return (
    <div className='navbar'>
        <NavLink to='/'><img src={assets.logo} className='logo' alt="" /></NavLink>
        <ul className='links'>
            <NavLink to='/' className='navlink'><p>Home</p><hr /></NavLink>
            <NavLink to='/shop' className='navlink'><p>Shop</p><hr /></NavLink>
            <NavLink to='/about' className='navlink'><p>About</p><hr /></NavLink>
            <NavLink to ='/contact' className='navlink'><p>Contact</p><hr /></NavLink>
        </ul>
          <div className='shopping-cart'>
            <Link to='/cart' className='cart-container'>
              <img src={assets.shoppingCart} className='cart-icon' alt="" />
              {/* <p className='cart-count'>10</p> */}
            </Link>
          <div>
          <img src={assets.menuResp} className='menu-resp' alt="" />
          <div>
            <img onClick={() =>setVisible(true)} src={assets.profile} className='profile' alt="" />
              {/* <div className='drop-down-menu'>
                <p className='drop-down-item'>My Profile</p>
                <p className='drop-down-item'>Orders</p>
                <p className='drop-down-item'>Logout</p>
              </div> */}
          </div>
                {/* <div className={`sidebar-menu ${visible ? 'width: 100%' : 'width: 0%'}`}>
                  <div>
                    <div onClick={()=>setVisible(false)}>
                      <img className='back-arrow' src={assets.backArrow} />
                      <p>Back</p>
                    </div>
                  </div>
                </div> */}
</div>
        </div>
    </div>
  )
}

export default Navbar;