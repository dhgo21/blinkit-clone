import React from 'react'
import "./Checkout.css"
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router'
function Checkout() {
  const upiapps=["/images/gpay.webp","/images/paytm.webp","/images/phonepay.webp","/images/bhim.webp"]
  const cartproducts = useSelector(state => state.slice.cartitems)

  const location = useLocation();
  const {gtotal,selectedAddress} = location.state || {}; // optional chaining
  return (
    <>
    <div className="checkout">
        <div className="checkout-navbar">
          <img id="navlogo"src="/images/logo.webp"></img>
        </div>
        <div className="payment-op">
          <div className="pay">
            <div className="pay-head">
              <h2 id="pay-met">Payment Method</h2>
            </div>
            <div className="upi-box">
              <p id="addpui">Add new UPI ID</p>
              <div className="upidiv">
                <div className="upiapps">
                  {
                    upiapps.map((curr)=>{
                      return (
                        <>
                        <img id="upiimages"src={curr}></img>
                        </>
                      )
                    })
                  }
                </div>
                <div className="upi-input">
                  <input id="upienter"placeholder='example@upi'></input>
                  <Link to="/orderplaced" target='_blank'><button id="pay-bttns">Pay Now ₹{gtotal}</button></Link>
                </div>
                <div className="upi-ex">
                  <p id="upi-ex1">The UPI ID is in the format of name/phone number@bankname</p>
                </div>
              </div>
            </div>
          </div>
          <div className="od">
            <div className="del-address">
              <p id="del-add">Delivery Address</p>
              <div className="my-pl"><p id="myplace">{selectedAddress.name}, {selectedAddress.houseNo}, {selectedAddress.floor}, {selectedAddress.block}</p></div>
            </div>
            <div className="mycartdiv">
              <div className="headingssscart">My Cart</div>
              <div className="cartit">{cartproducts.length} items</div>
            </div>
            <div className="cartpro">
              {
                cartproducts.map((curr)=>{
                  return (
                    <>
                    <div className="val1">
                      <div className="qty">
                        {curr.quantity}
                      </div>
                      <div className="item-image">
                        <img id="item-ph"src={curr.image}></img>
                      </div>
                      <div className="item-name">
                        <p className='pro-info1'>{curr.title}</p>
                        <p className='pro-info2'>{curr.weight}</p>
                        <p className='pro-info3'>₹{curr.price}</p>
                      </div>
                    </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default Checkout