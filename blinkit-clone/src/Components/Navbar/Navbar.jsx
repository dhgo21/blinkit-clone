import React from 'react'
import "./Navbar.css"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
function Navbar() {
  return (
    <>
    <div className="navbar">
      <div className="logo">
        <img id="nav-logo" src="/images/logo.webp"></img>
      </div>
      <div className="delivery">
        <h3 id="delv-head">Delivery in 8 minutes</h3>
        <p id="del-add">Jaipur, India</p>
      </div>
      <div className="search">
        <span id="search-icon"><IoSearchOutline /></span>
        <input id="search-input" placeholder='Search products...'></input>
      </div>
      <div className="loginbttn">
        <div id='logbttn'><CiLogin />Login</div>
      </div>
      <div className="cartbttn">
        <div id='cbttn'><IoCartOutline id="cartttt"/>Cart 0</div>
      </div>
    </div>
    </>
  )
}

export default Navbar