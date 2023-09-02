import React, { useState } from 'react'
import './NavbarBottom.css'
import { NavLink } from 'react-router-dom';
import Categories from '../categories/categories';

export default function NavbarBottom() {
  let [opener, setOpener] = useState(false)
  console.log(opener);
  return (
    <div className='navbar-bottom'>
      <div className={`navbar-bottom-left ${opener && "active"}`}>
        <div className="category-opener" onClick={() => setOpener(!opener)}>
          <div className={`category-opener-item`}>
            <i className="fa-regular fa-rectangle-history"></i>
            <i className='fa-solid fa-xmark'></i>
          </div>
        </div>
        <div className="categories">
          <Categories />
        </div>
        <NavLink className="btns" to="/faq">FAQ</NavLink>
        <NavLink className="btns" to="/myorder">My Order</NavLink>
      </div>
      <div className="navbar-bottom-right">
        <NavLink to="/wishlist"><div className='wishlist btns'><i className="fa-light fa-heart"></i> Wishlist</div></NavLink>
        <NavLink to="/cart"><div className='cart btns'><i className="fa-light fa-cart-shopping"></i> Cart</div></NavLink>
      </div>
    </div>
  )
}
