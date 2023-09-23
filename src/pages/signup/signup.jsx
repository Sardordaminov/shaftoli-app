import React, { useState } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'

const Signup = () => {
  document.title = "Sign up"

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("")
  const [show, setShow] = useState(false);
  const [passwordValue, setPasswordValue] = useState(0)
  const [numberValue, setNumberValue] = useState(0)


  const phonenumber = (e) => {
    const value = e.target.value;
    // console.log(`Number Input Length: ${value.length}`);
    if (value.length <= 0) {
      setPhoneNumber("Required")
    } else if (value.length === 9) {
      setPhoneNumber('')
    } else if (value.length > 9 || value.length < 9) {
      setPhoneNumber('Must be a phone number in Uzbekistan')
    }
    setNumberValue(value)
  };
  const Password = (e) => {
    const value = e.target.value;
    if (value.length <= 0) {
      setPassword("Required")
    } else if (value.length < 8) {
      setPassword('Password must be at least 8 characters')
    } else {
      setPassword('')
    }
    setPasswordValue(value)
  };

  const handleShow = () => {
    setShow(!show)
  }

  const confirmPass = (e) => {
    const value = e.target.value;
    if (value.length <= 0) {
      setConfirmpass('Required')
    } else if (value === passwordValue) {
      setConfirmpass("")
    } else {
      setConfirmpass('Passwords must match')
    }
  }

  const handleSignup = () => {
    localStorage.setItem('phoneNumber', numberValue);
    localStorage.setItem('password', passwordValue);

    if (numberValue.length <= 0) {
      
    } else {
      
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
            <input type="number" className='number-input' placeholder='00 000-00-00' onFocus={phonenumber} onChange={phonenumber} />
            <h4 className='number-alert'>{phoneNumber}</h4>
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input type={show ? "text" : "password"} placeholder='Password' className='password' onFocus={Password} onChange={Password} />
            <button className='show' onClick={handleShow}><i className={show ? 'fa-regular fa-eye' : 'fa-regular fa-eye-slash'}></i></button>
            <h4 className='password-alert'>{password}</h4>
          </div>
          <div className="input">
            <label htmlFor="password">Confirm Password:</label>
            <input type={show ? "text" : "password"} placeholder='Confirm Password' className='password confirm' onChange={confirmPass} onFocus={confirmPass} />
            <h4 className='confirm-alert'>{confirmpass}</h4>
          </div>
          <button type='submit' className='signup-btn' onClick={handleSignup}>Sign up</button>
        </div>
        <div className="signup-bottom">Already have an account? <Link to="/login">Log In</Link></div>
      </div>
    </div>
  )
}

export default Signup