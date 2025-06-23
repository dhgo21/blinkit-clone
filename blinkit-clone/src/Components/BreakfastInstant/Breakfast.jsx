import React, { useEffect } from 'react'
import "./Breakfast.css"
import { LuClock2 } from "react-icons/lu";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { addToCart , orderDetails} from '../Redux/Store';
import Footer from '../Footer/Footer';
import breakfastitems from './Brackfastitems';
function Breakfast() {
    const dispatch=useDispatch()
  const navigate=useNavigate()

  function handleaddtocart(item)
  {
    dispatch(addToCart(item))
  }
  function handleod(item)
  {
    dispatch(orderDetails([item]))
    navigate("/orderdetails") 
  }

  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <>
    <div className="breakfast">
        <div className="dbe-head">Buy Instant Products Online</div>
      <div className="dbe-products">
          {
            breakfastitems.map((curr)=>{
              return (
                <>
                <div className="dbe-box">
                  <div className="item-photo2">
                    <div className="item-image2">
                      <img id="img2"src={curr.image} onClick={()=>handleod(curr)}></img>
                    </div>
                  </div>
                  <div className="stuffs2">
                    <p id="clock-time2"><LuClock2 />8 MINS</p>
                    <p id="curr-title2">{curr.title}</p>
                    <p id="curr-weight2">{curr.weight}</p>
                    <div className="price-bttn2">
                      <p id="curr-price2">₹{curr.price}</p>
                      <button id="add-bttn2" onClick={()=>handleaddtocart(curr)}>ADD</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Breakfast