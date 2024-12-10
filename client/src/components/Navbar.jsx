import { React, useState } from 'react'
import { assets } from '../assets/assets'
import '../App.css'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div className='navbar'>
        <NavLink to='/'><img src={assets.logo} className='logo' alt="" /></NavLink>
        <ul className='links'>
            <NavLink to='/' className='navlink'><p>Home</p><hr /></NavLink>
            <NavLink to='/shop' className='navlink'><p>Shop</p><hr /></NavLink>
            <NavLink to='/about' className='navlink'><p>About</p><hr /></NavLink>
            <NavLink to ='/contact' className='navlink'><p>Contact</p><hr /></NavLink>
        </ul>
        <div id="user-container">
        <div className='shopping-cart'>
            <Link to='/cart' className='cart-container'>
              <h4>$0.00</h4>
              <img src={assets.shoppingCart} className='cart-icon' alt="" />
            </Link>
        </div>
        <div className="user-profile" onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
          <button><img src={assets.profile} className='profile' alt="" /></button>
          {isDropdownVisible && (
            <ul id="drop-down-menu">
                  <Link to='/' className='drop-down-items'><p>My Profile</p></Link>
                  <Link to='/' className='drop-down-items'><p>Orders</p></Link>
                  <Link to='/' className='drop-down-items'><p>Logout</p></Link>
             </ul>
            )}
          
        
        </div>
          {/* <div>
          <img src={assets.menuResp} className='menu-resp' alt="" />
          
            <div>
            <ul id="drop-down-items">
                  <Link to='/' className=''><p>My Profile</p><hr /></Link>
                  <Link to='/' className=''><p>Orders</p><hr /></Link>
                  <Link to='/' className=''><p>Logout</p><hr /></Link>
                </ul>
            </div>
          
        </div> */}
      </div>
      </div>
  )
}

export default Navbar;