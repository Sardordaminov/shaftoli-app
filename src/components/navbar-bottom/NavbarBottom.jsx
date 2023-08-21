import React, { useState } from 'react'
import './NavbarBottom.css'
import { NavLink } from 'react-router-dom';

export default function NavbarBottom() {
  let [opener, setOpener] = useState(true)
  console.log(opener);
  return (
    <div className='navbar-bottom'>
      <div className="navbar-bottom-left">
        <div className="category-opener" onClick={() => setOpener(!opener)}>
          <div className='category-opener-item'>
            <i className="fa-light fa-rectangle-history"></i>
            <i className='fa-solid fa-xmark'></i>
          </div>
        </div>
        <div className="categories"></div>
        <NavLink to="/faq">FAQ</NavLink>
        <NavLink to="/myorder">My Order</NavLink>
      </div>
      <div className="navbar-bottom-right">
        <div className='wishlist'></div>
      </div>
    </div>
  )
}
