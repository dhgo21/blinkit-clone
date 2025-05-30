import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa6";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
function Navbar() {
  const { loginWithRedirect , isAuthenticated, user , logout } = useAuth0();
  const [userd,setuserd]=useState(false)
  const [addToCart, setAddToCart] = useState(false)
  const cartitems=useSelector((state)=>state.slice.cartitems)
  function handleuserd()
  {
    setuserd(!userd)
  }
  function handleaddtocart()
  {
    setAddToCart(true)
  }

  return (
    <>
    {
      addToCart ? <Cart setAddToCart={setAddToCart} /> : ""
    }
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img id="nav-logo" src="/images/logo.webp"></img></Link>
      </div>
      <div className="delivery">
        <h3 id="delv-head">Delivery in 8 minutes</h3>
        <p id="del-add">Jaipur, India</p>
      </div>
      <div className="search">
        <span id="search-icon"><IoSearchOutline /></span>
        <input id="search-input" placeholder='Search products...'></input>
      </div>
      {
        isAuthenticated ?
        <div className="useracc" onClick={handleuserd}>
          <FaUser /> {user.name}
        </div>
        :
        <div className="loginbttn">
        <div id='logbttn' onClick={() => loginWithRedirect()}><CiLogin />Login</div>
      </div>
      }
      <div className="cartbttn">
          <button id='cbttn' onClick={handleaddtocart}><IoCartOutline id="cartttt"/>Cart <span id="cartlength">{cartitems.length}</span></button>
      </div>
    </div>
    {
      userd ?
        <div className="userdetails" >
          <div className="myaccount">
            <h3>My Account</h3>
          </div>
          <div className="accdetails">
            <div className="listss">My Orders</div>
            <div className="listss">Saved Address</div>
            <div className="listss">E-Gift Cards</div>
            <div className="listss">FAQ's</div>
            <div className="listss">Account Privacy</div>
            <div className="listss" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>

            <div className="qrdetails">
              <div className="qr">
                <img id="qrimg" src='/images/qr.png'></img>
              </div>
              <div className="qrlines">
                <span className='span1'>Simple way to get groceries <br></br></span><span className='span2'>in minutes</span>
                <p className='span3'>Scan the QR code and download blinkit app</p>
              </div>
            </div>
          </div>
        </div>
      :
      ""
    }
    </>
  )
}

export default Navbar