import React, { useEffect, useState } from 'react'
import "./Orderhistory.css"
import { IoIosArrowRoundBack } from "react-icons/io";
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
function Orderhistory() {
    const location = useLocation();
  const { orderTotal, timeIST, formatted, gtotal, orderItems } = location.state || {};
    const addresses = useSelector(state => state.slice.addresses);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    if (addresses.length > 0) {
      setSelectedAddress(addresses[0]);
    }
  }, [addresses]);
const navigate=useNavigate()

// function getRandomInteger(min, max)
// {
//   min = Math.ceil(min)
//   max = Math.floor(max)
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }
// const randomNumber = getRandomInteger(100, 999);
// const orderID="ORD304900"+ randomNumber
  return (
    <>
    <div className="orderhistory">
        <div className="back-bttnn">
            <IoIosArrowRoundBack id="backkk" onClick={() => navigate(-1)}/>
        </div>
        <div className="time-dat">
            <p id="os">Order summary</p>
            <p id="os-time">Arrived at {timeIST}</p>
        </div>
        <div className="prod">
            <div className="pro-head">
                <p id="itemssss">{orderItems.length} items in this order</p>
            </div>
            <div className="pro-det">
                {
                    orderItems.map((curr,index)=>{
                        return (
                            <>
                                <div className="boxxx" key={index}>
                                    <div className="pro-img">
                                        <img id="pro-photo"src={curr.image}></img>
                                    </div>
                                    <div className="prodetprice">
                                        <div className="titleeee">
                                            <p id="pro-title">{curr.title}</p>
                                            <p id="pro-weight">{curr.weight}</p>
                                        </div>
                                        <div className="amounttt">
                                            <p id="pro-price">₹{curr.price}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
                
            </div>
        </div>
        <div className="bill-del">
            <div className="bill-head">
                <h4 id="b-h">Bill details</h4>
            </div>
            <div className="bill-details">
                <div className="item-total">
                    <p className='b'>Item total</p>
                    <p className='b'>₹{orderTotal}</p>
                </div>
                <div className="handlee-charge">
                    <p className='b'>Handling charge</p>
                    <p className='b'>₹5</p>
                </div>
                <div className="delivery-charge">
                    <p className='b'>Delivery charge</p>
                    <p className='b'>₹5</p>
                </div>
                <div className="bill-total">
                    <p>Bill total</p>
                    <p>₹{gtotal}</p>
                </div>
            </div>     
        </div>
        <div className="o">
            <div className="o-head">
                <h4 id="o-h">Order details</h4>
            </div>
            <div className="o-d">
                <p className='p-d'>Order id</p>
                <p className='p-d2'>ORD304900684</p>

                <p className='p-d'>Payment</p>
                <p className='p-d2'>Paid online</p>

                <p className='p-d'>Deliver to</p>
                {selectedAddress && (
                    <p className='p-d2'>{selectedAddress.name}, {selectedAddress.houseNo}, {selectedAddress.floor}, {selectedAddress.block}</p>)
                }
                
                <p className='p-d'>order placed</p>
                <p className='p-d2'>placed on {formatted}, {timeIST}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Orderhistory