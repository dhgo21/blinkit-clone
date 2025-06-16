import React from 'react'
import "./Myorders.css"
import { TiTick } from "react-icons/ti";
import { FaArrowRight } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { format } from 'date-fns';
function Myorders({od}) {
  const formatted = format(new Date(), 'd MMMM yy'); 
const date = new Date();
const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
  timeZone: 'Asia/Kolkata'};
const timeIST = date.toLocaleString('en-US', options);
  const orders = useSelector(state => state.slice.orders);
  return (
    <>
    {
      od ? (
          <>
          {orders.map((orderItems, index) => {
             const orderTotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
            const gtotal = orderTotal + 10;
            return (
            <div className="myorders">
              <div className="orders"key={index}>
                <div className="order-arrived">
                  <div className="tick-icon">
                    <TiTick id="t" />
                  </div>
                  <div className="blockbbb">
                    <div className="timee">
                      <p id="arrivedhead">Arrived in 10 minutes</p>
                      <p id="amount-time">₹{gtotal} {formatted}, {timeIST}</p>
                    </div>
                    <div className="rightarrow">
                      <FaArrowRight />
                    </div>
                  </div>
              </div>

      <div className="order-images">
        {orderItems.map((item, idx) => (
          <div key={idx} className="single-order-product">
            <img id="proo-img"src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  </div>
)})}

          </>
      )
      : (
        <div className="emptymyoders">
          <div className="empty-image">
            <img id="empty-logo"src="/images/empty-order.webp"></img>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Myorders