import React, { useEffect, useState } from 'react'
import "./Myorders.css"
import { TiTick } from "react-icons/ti";
function Myorders({od}) {
  const [fixedTime, setFixedTime] = useState(null);

  useEffect(() => {
    const now = new Date();
    const fixed = new Date(now); // Clone current time
    fixed.setHours(20); // 8 PM = 20 in 24hr format
    fixed.setMinutes(29);
    fixed.setSeconds(0);
    fixed.setMilliseconds(0);

    setFixedTime(fixed);
  }, []);
  return (
    <>
    {
      od ? (
        <div className="myorders">
          <div className="orders">
            <div className="order-arrived">
              <div className="tick-icon">
                <TiTick id="t"/>
              </div>
              <div className="timee">
                <p>Arrived in 10 minutes</p>
                <p>₹232 {fixedTime ? (fixedTime.toLocaleTimeString()):""}</p>
              </div>
              <div className="rightarrow">

              </div>
            </div>
            <div className="order-images">

            </div>
          </div>
        </div>
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