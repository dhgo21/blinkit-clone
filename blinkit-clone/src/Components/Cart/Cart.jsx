import React from 'react'
import "./Cart.css"
import { RxCross2 } from "react-icons/rx";
import { TbStopwatch } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import { CgNotes } from "react-icons/cg";
import { MdDeliveryDining } from "react-icons/md";
import { IoBag } from "react-icons/io5";
import { decreQty, increQty } from '../Redux/Store';
function Cart({setAddToCart}) {

  const cartproducts = useSelector(state => state.slice.cartitems)
  
  const dispatch=useDispatch()

  const total = cartproducts.reduce((total, item) => {
    return Math.round(total + item.price * item.quantity)
  }, 0)

  function handleincreqty(item)
  {
    dispatch(increQty(item))
  }

  function handledecreqty(item)
  {
    dispatch(decreQty(item))
  }
  const gtotal=total+10

  return (
    <>
    <div className="cart">
      <div className="cart-head">
        <h4 className='cartheading'>My Cart</h4>
        <RxCross2 id="crosss" onClick={()=>setAddToCart(false)}/>
      </div>
      <div className="cartitems">
        <div className="cartproducts">
          {
            cartproducts.length===0 ? (
              <div className="emptycart">
                <h2>Oops! Cart is Empty!</h2>
                <MdOutlineRemoveShoppingCart id="emptycartlogo"/>
                <Link to="/"><button id="browse-pro" onClick={()=>setAddToCart(false)}>Browse Products</button></Link>
              </div>
            ) : (
              <>
              <div className="cartlen">
                <div className="clocktimining">
                  <TbStopwatch id="clockicon"/>
                  <div className="deltime">
                    <div className="topdiv">
                      Delivery in 15 minutes
                    </div>
                    <div className="bottomdiv">
                      Shipment of {cartproducts.length} items
                    </div>
                  </div>
                </div>
                <div className="cart-products">
                  {
                    cartproducts.map((curr)=>{
                      return (
                        <>
                        <div className="pro">
                          <div className="pro1">
                            <div className="proimagediv">
                              <img id="proimage"src={curr.image}></img>
                            </div>
                            <div className="prodetailsdiv">
                              <p id="title">{curr.title}</p>
                              <p id="weight">{curr.weight}</p>
                              <p id="price">₹{curr.price}</p>
                            </div>
                          </div>
                          <div className="proqtydetail">
                            <div className="qtydetails">
                              <button className='bttns' onClick={()=>handledecreqty(curr)}>-</button>
                              <input id="qtyfield" type='number' value={curr.quantity}readOnly></input>
                              <button className='bttns' onClick={()=>handleincreqty(curr)}>+</button>
                            </div>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <div className="totalbill">
                  <div className="bill-details">Bill details</div>
                  <div className="stuffssss">
                    <div className="sub-total">
                      <div className="chargessss">
                        <div className="icon-text">
                        <CgNotes className='del-logo'/> Sub Total
                      </div>
                        <div className="icon-text">
                          <MdDeliveryDining className='del-logo'/> Delivery charge
                        </div>
                        <div className="icon-text">
                        <IoBag className='del-logo'/> Handling charge
                      </div>
                      </div>
                      <div className="handle-charge">
                      <div className="st">
                        ₹{total}
                      </div>
                      <div className="st">
                        ₹5
                      </div>
                      <div className="st">
                        ₹5
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="bill-detailsss">
                    <div className="gt">
                      Grand total
                    </div>
                    <div className="gtotal">
                      ₹{gtotal}
                    </div>
                  </div>
                </div>
                <div className="call-pol">
                  <p id="cal-pol">Cancellation Policy</p>
                  <p id="cal-del">Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                </div>
              </div>
              <div className="carttotal">
                <div className="total">
                  <p id="total">₹{gtotal}</p>
                  <p id="totaltext">TOTAL</p>
                </div>
                <div className="proceed">
                  <div className="p">Proceed</div>
                  <div className="arr"><FaChevronRight /></div>
                </div>
              </div>
              </>
            )
          }
        </div>
      </div>

    </div>
    </>
  )
}

export default Cart