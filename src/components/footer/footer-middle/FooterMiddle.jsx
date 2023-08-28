import React from 'react'
import "./FooterMiddle.css"

export default function FooterMiddle() {
  function category(e) {
    alert("page not found 404")
  }
  return (
    <div className='footermiddle'>
      <div className="footermiddle-item">
        <h1>CATEGORY</h1>
        <p onClick={category}>Men</p>
        <p onClick={category}>Women</p>
        <p onClick={category}>Accesories</p>
        <p onClick={category}>Beauty</p>
      </div>
      <div className="footermiddle-item">
        <h1>INFORMATION</h1>
        <p>Seller Page</p>
        <p>Contact Us</p>
        <p>Blog</p>
        <p>FAQs</p>
      </div>
      <div className="footermiddle-item">
        <h1>USEFUL LINKS</h1>
        <p>Term & Condition</p>
        <p>Returns & Exchanges</p>
        <p>Shipping 7& Delivery</p>
        <p>Privacy Policy</p>
      </div>
      <div className="footermiddle-item">
        <h1>CONTACT US</h1>
        <p>Uzbekistan, Namangan</p>
        <p>+998976815007</p>
        <p>All week 25/7</p>
        <p>dovudkhonhusanov5007@gmail.com</p>
      </div>
    </div>
  )
}
