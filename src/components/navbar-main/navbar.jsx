import React from "react";
import "./navbar.css";
import { BsSearch } from 'react-icons/bs'
import NavbarBottom from '../navbar-bottom/NavbarBottom'
import { NavLink } from "react-router-dom";

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
          <NavLink to="/login"><button className="login btn">Log in</button></NavLink>
          <NavLink to="/signup"><button className="signup btn">Sign up</button></NavLink>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
}
