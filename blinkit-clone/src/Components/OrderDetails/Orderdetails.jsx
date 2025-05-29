import React from 'react'
import "./Orderdetails.css"
import { useSelector } from 'react-redux'
function Orderdetails() {
    const orderdetails=useSelector(state => state.slice.orderd)

  return (
    <>
    <div className="orderdetails">
        <div className="leftpart">
            {
                orderdetails.map((curr)=>{
                    return (
                        <>
                            <div className="imagecont1">
                                <img src={curr.image}></img>
                            </div>
                        </>
                    )
                })
            }
            <div className="imagecount2">

            </div>
        </div>
        <div className="rightpart">

        </div>
    </div>
    </>
  )
}

export default Orderdetails