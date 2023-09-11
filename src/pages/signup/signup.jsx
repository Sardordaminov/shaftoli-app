import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  document.title = "Sign up"

  const [phoneNumber, setPhoneNumber] = useState({
    number: '',
    inspection: false
  }); // Initialize phoneNumber state

  // Function to handle changes in the number-input field
  const PhoneNumber = (e) => {
    const value = e.target.value;
    // console.log(`Number Input Length: ${value.length}`);
    if (value.length <= 0) {
      setPhoneNumber({
        number: "Required",
        inspection: true
      })
    } else if (value.length === 9) {
      setPhoneNumber('')
    } else if (value.length > 9 || value.length < 9) {
      setPhoneNumber('Must be a phone number in Uzbekistan')
    }
  };

  return (
    <div className='signup-page'>
      <div className='signup'>
        <h1 className='signup-title'>Sign Up</h1>
        <div className='inputs'>
          <div className="input">
            <label htmlFor="number-input">Phone Number:</label>
            <p className='number-region'>+998</p>
            <input type="number" className='number-input' placeholder='00 000-00-00' onFocus={PhoneNumber} onChange={PhoneNumber} />
            <h4 className='number-alert'>{phoneNumber}</h4>
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder='Password' className='password' />
          </div>
          <div className="input">
            <label htmlFor="password">Confirm Password:</label>
            <input type="password" placeholder='Confirm Password' className='password confirm' />
          </div>
          <button type='submit' className='signup-btn'>Sign up</button>
        </div>
        <div className="signup-bottom">Already have an account? <Link to="/login">Log In</Link></div>
      </div>
    </div>
  )
}

export default Signup