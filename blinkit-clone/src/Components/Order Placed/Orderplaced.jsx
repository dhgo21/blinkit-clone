import React, { useEffect, useState } from 'react'
import "./Orderplaced.css"
import Loader from '../Loader/Loader'
import { Link } from 'react-router'
function Orderplaced({setod}) {
    const [isloader,setisloader]=useState(true)

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setisloader(false)
            setod(true)
        },3000)
        return () => clearTimeout(timer); // cleanup
    },[])

  return (
    <>
    {isloader ? (
        <>
    <Loader />
  </>
    ):<div className="orderplaced">
            <div className="op">
                <div className="tick">
                    <img id="tick-logo"src="/images/tick.webp"></img>
                </div>
                <div className="op-del">
                    <h2>Thank you for your order!</h2>
                    <p id="delt">Your order has now been placed and will be delivered in 10 mins. You can check the status of your orders in "<Link to="/account/myorders">My Orders</Link>".</p>
                </div>
            </div>
        </div>
    }
    </>
  )
}

export default Orderplaced