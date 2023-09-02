import React from "react";
import "./navbar.css";
import { BsSearch } from 'react-icons/bs'
import NavbarBottom from '../navbar-bottom/NavbarBottom'
import { NavLink, Link } from "react-router-dom";

export default function navbar() {
  return (
    <>
      <div className="navbar-main">
        <Link to="/"><h1 className="navbar-main-title">SHAFTOLI MARKET</h1></Link>
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
          <NavLink to="/signup"><button className="Signup btn">Sign up</button></NavLink>
        </div>
      </div>
      <NavbarBottom />
    </>
  );
}
