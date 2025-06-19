import React, { useEffect, useState } from 'react'
import "./Checkout.css"
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { placeOrder } from '../Redux/Store'

function Checkout() {
  const upiapps=["/images/gpay.webp","/images/paytm.webp","/images/phonepay.webp","/images/bhim.webp"]
  const cartproducts = useSelector(state => state.slice.cartitems)
  const [isDisabled, setIsDisabled] = useState(true);
  const location = useLocation();
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {gtotal,selectedAddress} = location.state || {}; // optional chaining


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange"
  });

  const onSubmit = (data) => {
    console.log("Valid UPI Submitted:", data.upiid);
    navigate("/orderplaced", { target: '_blank' }); // navigate programmatically
  };
  const upiid = watch("upiid");

  useEffect(() => {
    const isValid = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/.test(upiid || "");
    setIsDisabled(!isValid);
  }, [upiid]);

  function handlePlaceOrder()
  {
    dispatch(placeOrder());
    
  }
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
                    upiapps.map((curr,index)=>{
                      return (
                        <>
                        <img key={index}id="upiimages"src={curr}></img>
                        </>
                      )
                    })
                  }
                </div>
                
                  <form className="upi-input" onSubmit={handleSubmit(onSubmit)}>
                    <div className="upiform">
                      <input
                        id="upienter"
                        placeholder='example@upi'
                        {...register("upiid", {
                          required: "UPI ID is required",
                          pattern: {
                            value: /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/,
                            message: "Enter a valid UPI ID (e.g., yourname@bank)"
                          },
                      })} />
                      
                      <button id={isDisabled ? "pay-dis" : "pay-bttns"} disabled={isDisabled} onClick={handlePlaceOrder}>Pay Now ₹{gtotal}</button>
                      </div>
                      {errors.upiid && <p className='e'>{errors.upiid.message}</p>}
                  </form>

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