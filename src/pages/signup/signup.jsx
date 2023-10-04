import React, { useState, useEffect } from 'react'
import "./signup.css"
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  document.title = "Sign up"

  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpass, setConfirmpass] = useState("")
  const [show, setShow] = useState(false);
  const [passwordValue, setPasswordValue] = useState(0)
  const [numberValue, setNumberValue] = useState(0)

  const [signUpIndex, setSignUpIndex] = useState(0);

  useEffect(() => {
    const savedSignUpIndex = localStorage.getItem('signUpIndex');
    if (savedSignUpIndex) {
      setSignUpIndex(parseInt(savedSignUpIndex));
    }
  }, []);

  const incrementSignUpIndex = () => {
    const newIndex = signUpIndex + 1;
    setSignUpIndex(newIndex);
    localStorage.setItem('signUpIndex', newIndex.toString());
    return newIndex;
  };

  const phonenumber = (e) => {
    const value = e.target.value;
    if (value.length <= 0) {
      setPhoneNumber("Required")
    } else if (value.length === 9) {
      setPhoneNumber('')
      setNumberValue(value)
    } else if (value.length > 9 || value.length < 9) {
      setPhoneNumber('Must be a phone number in Uzbekistan')
    }
  };
  const Password = (e) => {
    const value = e.target.value;
    if (value.length <= 0) {
      setPassword("Required")
    } else if (value.length < 8) {
      setPassword('Password must be at least 8 characters')
    } else {
      setPassword('')
      setPasswordValue(value)
    }

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
    const index = incrementSignUpIndex();

    // const timestamp = new Date().getTime();
    // const phoneKey = `phoneNumber_${index}`;
    // const passwordKey = `password_${index}`;

    if (numberValue === 0) {
      toast.error('Please fill number input', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (passwordValue === 0) {
      toast.error('So fill password input too :)', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (confirmpass.includes("Passwords must match") || confirmpass.includes("Required")) {
      toast.error('Hey lil nigga fill confirm pass !!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.success('🥳 You have registered', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      // localStorage.setItem(phoneKey, numberValue);
      // localStorage.setItem(passwordKey, passwordValue);

      localStorage.setItem(`phoneNumber_${index}`, numberValue);
      localStorage.setItem(`password_${index}`, passwordValue);
    }
  };

  return (
    <div className='signup-page'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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