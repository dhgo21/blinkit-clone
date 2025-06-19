import React, { useEffect, useRef, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUser } from "react-icons/fa6";
import Cart from '../Cart/Cart';
import { useSelector } from 'react-redux';
function Navbar({ userd, setuserd }) {
  const { loginWithRedirect , isAuthenticated, user , logout } = useAuth0();
  const [addToCart, setAddToCart] = useState(false)
  const cartitems=useSelector((state)=>state.slice.cartitems)
  const popupref=useRef(null)


  // this UseEffect is for closing userd popup close on clicking outsdie
  useEffect(() => {
  function handleClickOutside(event) {
    if (popupref.current && !popupref.current.contains(event.target)) {
      setuserd(false); // Clicked outside the popup
      setAddToCart(false)
    }
  }

  if (userd || addToCart) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [userd,addToCart]); 



  function handleuserd()
  {
    setuserd(!userd)
  }
  function handleaddtocart()
  {
    setAddToCart(true)
  }

  useEffect(() => {
  if (isAuthenticated && user) {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("isAuthenticated", true);
  }
}, [isAuthenticated, user]);

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  const storedAuth = localStorage.getItem("isAuthenticated");

  if (!isAuthenticated && storedUser && storedAuth) {
    setuserd(!true); // optionally open user menu
  }
}, []);

useEffect(() => {
  if (addToCart) {
    document.body.style.overflow = "hidden"; // Disable scroll
  } else {
    document.body.style.overflow = "auto"; // Enable scroll back
  }

  return () => {
    document.body.style.overflow = "auto"; // Cleanup if component unmounts
  };
}, [addToCart]);


const storedUser = JSON.parse(localStorage.getItem("user"));
const storedAuth = localStorage.getItem("isAuthenticated") === "true";

  return (
    <>
      {addToCart && (
        <>
          <div className="cart-overlay" onClick={() => setAddToCart(false)}></div>
          <div ref={popupref}>
            <Cart setAddToCart={setAddToCart} addToCart={addToCart} />
          </div>
        </>
      )}
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
          isAuthenticated || storedAuth ?
            <div className="useracc" onClick={handleuserd}>
              <FaUser /> {user?.name || storedUser?.name}
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
        userd && (
          <>
            <div className="cart-overlay" onClick={() => setuserd(false)}></div>
            <div className="userdetails" ref={popupref} >
            <div className="myaccount">
              <h3 id="my-acc">My Account</h3>
              <p id="user-mail">{user?.email || storedUser?.email}</p>
            </div>
            <div className="accdetails">
              <Link to="/account/myorders" className="listss">My Orders</Link>
              <Link to="/account/myaddresses" className="listss">Saved Address</Link>
              <Link to="/account/egiftcards" className="listss">E-Gift Cards</Link>
              <Link className="listss">FAQ's</Link>
              <Link to="/account/accountprivacy" className="listss">Account Privacy</Link>
              <div className="listss" onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("isAuthenticated");
                logout({ logoutParams: { returnTo: window.location.origin } })}
                }>Logout</div>

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
          </>
        )
      }
    </>
  )
}

export default Navbar