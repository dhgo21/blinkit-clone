import React, { useEffect } from 'react'
import "./Orderdetails.css"
import { useDispatch, useSelector } from 'react-redux'
import { LuClock2 } from "react-icons/lu"
import { addToCart } from '../Redux/Store'
import Footer from '../Footer/Footer'

function Orderdetails() {
    const orderdetails = useSelector(state => state.slice.orderd)
    const dispatch = useDispatch()

    function handleadd(item) {
        dispatch(addToCart(item))
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        <div className="orderdetails">
            <div className="leftpart">
                {orderdetails.map((curr, index) => (
                    <div className="imagecont1" key={`img-${index}`}>
                        <img id="pro-image" src={curr.image} alt="product" />
                    </div>
                ))}
                <div className="imagecount2">
                    {orderdetails.map((curr, index) => (
                        <div className='image-bot' key={`bot-img-${index}`}>
                            <img id="bot-image" src={curr.image} alt="product" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="rightpart">
                <div className="top-pro-del1">
                    {orderdetails.map((curr, index) => (
                        <div className='title-top' key={`title-${index}`}>
                            <p id="tit">{curr.title}</p>
                            <p id="clock-time2"><LuClock2 />8 MINS</p>
                        </div>
                    ))}
                </div>

                <div className="top-pro-del2">
                    {orderdetails.map((curr, index) => (
                        <div className="price-pro-del" key={`price-${index}`}>
                            <div className="l2">
                                <p id="weight2">{curr.weight}</p>
                                <p id="mrp">MRP ₹{curr.price}</p>
                                <p id="tax">(Inclusive of all taxes)</p>
                            </div>
                            <div className="r">
                                <button id="bttn-add" onClick={() => handleadd(curr)}>ADD</button>
                            </div>
                        </div>
                    ))}

                    <div className="why">
                        <h3 id="why-shop">Why shop from blinkit?</h3>
                        <div className="why-del">
                            <div className="why1">
                                <img src='/images/10min.webp' className='del-photos' alt="delivery" />
                                <div className="why-desc">
                                    <p id="why-desc1">Superfast Delivery</p>
                                    <p id="why-desc2">Get your order delivered to your doorstep at the earliest from dark stores near you.</p>
                                </div>
                            </div>
                            <div className="why2">
                                <img src='/images/bp.webp' className='del-photos' alt="best prices" />
                                <div className="why-desc">
                                    <p id="why-desc1">Best Prices & Offers</p>
                                    <p id="why-desc2">Best price destination with offers directly from the manufacturers.</p>
                                </div>
                            </div>
                            <div className="why3">
                                <img src='/images/w.webp' className='del-photos' alt="wide assortment" />
                                <div className="why-desc">
                                    <p id="why-desc1">Wide Assortment</p>
                                    <p id="why-desc2">Choose from 5000+ products across food, personal care, household & other categories.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Orderdetails
