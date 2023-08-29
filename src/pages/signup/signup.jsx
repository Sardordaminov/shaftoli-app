import React from 'react'
import "./signup.css"

const signup = () => {
  document.title = "Sign up"
  return (
    <div className='signup'>
      <h1 className='signup-title'>Sign Up</h1>
      <div className='inputs'>
      <div className="input"><input type="number" className='number-input' placeholder='00 000-00-00'/></div>
      <div className="input"><input type="password" className='password'/></div>
      <div className="input"><input type="password" className='password confirm'/></div>
      
      </div>
    </div>
  )
}

export default signup