import React from 'react'
import "./FooterTop.css"

export default function FooterTop() {
  return (
    <div className='footer-top'>
      <p>BE IN TOUCH WITH US:</p>
      <div className="top-input">
        <input type="text" placeholder='Enter your email' />
        <button>JOIN US</button>
      </div>
      <div className='socials'>
        <i className='fa-brands fa-facebook'></i>
        <i className='fa-brands fa-twitter'></i>
        <i className='fa-brands fa-instagram'></i>
        <i className='fa-brands fa-pinterest'></i>
      </div>
    </div>
  )
}
