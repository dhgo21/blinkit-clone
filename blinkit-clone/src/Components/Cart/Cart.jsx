import React from 'react'
import "./Cart.css"
import { RxCross2 } from "react-icons/rx";
import { TbStopwatch } from "react-icons/tb";
import { useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Link } from 'react-router';
function Cart({setaddtocart}) {

  const cartproducts = useSelector(state => state.slice.cartitems)
  // const dispatch=useDispatch()

  return (
    <>
    <div className="cart">
      <div className="cart-head">
        <h4 className='cartheading'>My Cart</h4>
        <RxCross2 id="crosss" onClick={()=>setaddtocart(false)}/>
      </div>
      <div className="cartitems">
        <div className="cartproducts">
          {
            cartproducts.length===0 ? (
              <div className="emptycart">
                <h2>Oops! Cart is Empty!</h2>
                <MdOutlineRemoveShoppingCart id="emptycartlogo"/>
                <Link to="/home"><button id="browse-pro" onClick={()=>setaddtocart(false)}>Browse Products</button></Link>
              </div>
            ) : (
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
                              <button className='bttns'>-</button>
                              <input id="qtyfield" type='number' value={curr.quantity}readOnly></input>
                              <button className='bttns'>+</button>
                            </div>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart