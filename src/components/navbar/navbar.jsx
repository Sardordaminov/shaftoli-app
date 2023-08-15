import React from "react";
import "./navbar.css";
import { BsSearch } from 'react-icons/bs'

export default function navbar() {
  return (
    <>
      <div className="navbar-main">
        <h1 className="navbar-main-title">SHAFTOLI MARKET</h1>
        <div className="navbar-main-searchbox">
          <input
            className="navbar-main-search"
            type="search"
            placeholder="Search a product"
            id="search"
          />
          <label className="search-btn" htmlFor="search"><BsSearch /></label>
        </div>
        <div className="reg-btns">
          <button className="login btn">Log in</button>
          <button className="signup btn">Sign up</button>
        </div>
      </div>
    </>
  );
}
