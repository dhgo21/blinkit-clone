import React, { useRef } from 'react'
import "./Home.css"
import Homeproducts from './HomeProducts'
import HomeBottomProducts from './HomeBottomproducts'
import { LuClock2 } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
import RollPaptob from './RollPaptob';
import Snacks from './Snacks';
import { useDispatch } from 'react-redux';
import { addToCart, orderDetails } from '../Redux/Store';
import Footer from '../Footer/Footer';
import { Link, useNavigate } from 'react-router';

function Home() {
  const scrollref1=useRef(null)
  const scrollref2=useRef(null)
  const scrollref3=useRef(null)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  function handlescroll(ref, direction, amount = 1100)
  {
    if (ref.current)
    {
      ref.current.scrollLeft += direction === 'right' ? amount : -amount;
    }
  }

  function handleadd(curr)
  {
    dispatch(addToCart(curr))
  }

  function handleorderdetails(item)
  {
    dispatch(orderDetails([item]))
    navigate("/orderdetails")
  }
  
  return (
    <>
    <div className="home">
      <div className="top-img">
        <img id="home-img-1" src='/images/paan-corner.webp'></img>
      </div>
      <div className="mid-img">
        <img className="mid-images" src='/images/pharmacy.webp'></img>
        <img className="mid-images" src='/images/Pet-Care.webp'></img>
        <img className="mid-images" src='/images/babycare.webp'></img>
      </div>
      <div className="bottom-banner-imgs">
        {
          Homeproducts.map((curr)=>{
            return (
              <>
              <img src={curr.image} className='bottom-images'></img>
              </>
            )
          })
        }
      </div>
      <div className="home-bottom-products">
        <div className="head">
          <h2>Dairy, Bread & Eggs</h2>
          <Link to="/dairy-bread-eggs"><button className="sellall-bttn">See all</button></Link>
        </div>
        <div className="items" ref={scrollref1}>
          {
            HomeBottomProducts.map((curr)=>{
              return (
                <>
                <div className="box">
                  <div className="item-photo">
                    <div className="item-image">
                      <img id="img"src={curr.image} onClick={()=>handleorderdetails(curr)}></img>
                    </div>
                  </div>
                  <div className="stuffs">
                    <p id="clock-time"><LuClock2 />8 MINS</p>
                    <p id="curr-title">{curr.title}</p>
                    <p id="curr-weight">{curr.weight}</p>
                    <div className="price-bttn">
                      <p id="curr-price">₹{curr.price}</p>
                      <button id="add-bttn" onClick={()=>handleadd(curr)}>ADD</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className="arrow1" onClick={() => handlescroll(scrollref1, 'left')}>
          <FaChevronLeft />
        </div>
        <div className="arrow" onClick={() => handlescroll(scrollref1, 'right')}>
          <FaAngleRight />
        </div>
      </div>
      
      <div className="roll-pap-tob">
        <div className="head">
          <h2>Rolling paper & tobacco</h2>
          <Link to="/roll-paper-tob"><button className="sellall-bttn">See all</button></Link>
        </div>
        <div className="items" ref={scrollref2}>
          {
            RollPaptob.map((curr)=>{
              return (
                <>
                <div className="box" >
                  <div className="item-photo">
                    <div className="item-image">
                      <img id="img"src={curr.image} onClick={()=>handleorderdetails(curr)}></img>
                    </div>
                  </div>
                  <div className="stuffs">
                    <p id="clock-time"><LuClock2 />8 MINS</p>
                    <p id="curr-title">{curr.title}</p>
                    <p id="curr-weight">{curr.weight}</p>
                    <div className="price-bttn">
                      <p id="curr-price">₹{curr.price}</p>
                      <button id="add-bttn" onClick={()=>handleadd(curr)}>ADD</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className="arrow1" onClick={() => handlescroll(scrollref2, 'left')}>
          <FaChevronLeft />
        </div>
        <div className="arrow"onClick={() => handlescroll(scrollref2, 'right')}>
          <FaAngleRight />
        </div>
      </div>

      <div className="snacks">
        <div className="head">
          <h2>Snacks & Munchies</h2>
          <Link to="/Snacks-munchies"><button className="sellall-bttn">See all</button></Link>
        </div>
        <div className="items" ref={scrollref3}>
          {
            Snacks.map((curr)=>{
              return (
                <>
                <div className="box">
                  <div className="item-photo">
                    <div className="item-image">
                      <img id="img"src={curr.image} onClick={()=>handleorderdetails(curr)}></img>
                    </div>
                  </div>
                  <div className="stuffs">
                    <p id="clock-time"><LuClock2 />8 MINS</p>
                    <p id="curr-title">{curr.title}</p>
                    <p id="curr-weight">{curr.weight}</p>
                    <div className="price-bttn">
                      <p id="curr-price">₹{curr.price}</p>
                      <button id="add-bttn" onClick={()=>handleadd(curr)}>ADD</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className="arrow1" onClick={() => handlescroll(scrollref3, 'left')}>
          <FaChevronLeft />
        </div>
        <div className="arrow"onClick={() => handlescroll(scrollref3 , 'right')}>
          <FaAngleRight />
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Home