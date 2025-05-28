import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagramSquare} from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { BsFillThreadsFill } from "react-icons/bs";
function Footer() {
  return (
    <>
    <div className="upper">
      <div className="footer">
        <div className="div1">
            <div className="top">
              Useful Links
            </div>
            <div className="bottomm">
                <div className="l">
                  <li>Blog</li>
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>FAQs</li>
                  <li>Security</li>
                  <li>Contact</li>
                </div>
                <div className="l">
                  <li>Partner</li>
                  <li>Franchise</li>
                  <li>Seller</li>
                  <li>Warehouse</li>
                  <li>Deliver</li>
                  <li>Resources</li>
                </div>
                <div className="l">
                  <li>Recipes</li>
                  <li>Bistro</li>
                </div>
            </div>
        </div>
        <div className="div2">
          <div className="top">
            Categories
          </div>
          <div className="bottomm2">
            <div className="l">
              <li>Vegetables & Fruits</li>
              <li>Cold Drinks & Juices</li>
              <li>Bakery & Biscuits</li>
              <li>Dry Fruits, Masala & Oil</li>
              <li>Paan Corner</li>
              <li>Pharma & Wellness</li>
              <li>Ice Creams & Frozen Desserts</li>
              <li>Beauty & Cosmetics</li>
              <li>Electronics & Electricals</li>
              <li>Toys & Games</li>
            </div>
            <div className="l">
              <li>Dairy & Breakfast</li>
              <li>Instant & Frozen Food</li>
              <li>Sweet Tooth</li>
              <li>Sauces & Spreads</li>
              <li>Organic & Premium</li>
              <li>Cleaning Essentials</li>
              <li>Personal Care</li>
              <li>Magazines</li>
              <li>Stationery Needs</li>
              <li>Print Store</li>
            </div>
            <div className="l">
              <li>Munchies</li>
              <li>Tea, Coffee & Health Drinks</li>
              <li>Atta, Rice & Dal</li>
              <li>Chicken, Meat & Fish</li>
              <li>Baby Care</li>
              <li>Home & Office</li>
              <li>Pet Care</li>
              <li>Fashion & Accessories</li>
              <li>Books</li>
              <li>E-Gift Cards</li>
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <div className="patent">
          © Blink Commerce Private Limited, 2016-2025
        </div>
        <div className="downloadapp">
          Download App
          <img className="stores" src='/images/applestore.webp'></img>
          <img className="stores" src='/images/googlestore.webp'></img>
        </div>
        <div className="social">
          <FaFacebook />
          <FaSquareTwitter />
          <FaInstagramSquare />
          <BsFillThreadsFill />
        </div>
      </div>
      <div className="lastlines">
        “Blinkit” is owned & managed by "Blink Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
      </div>
    </div>
    </>
  )
}

export default Footer