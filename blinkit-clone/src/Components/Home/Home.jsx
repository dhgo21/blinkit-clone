import React, { useRef } from 'react'
import "./Home.css"
import Homeproducts from './HomeProducts'
import HomeBottomProducts from './HomeBottomproducts'
import { LuClock2 } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";
function Home() {
  const scrollref=useRef(null)

  function handlescrollright() {
  if (scrollref.current) {
    scrollref.current.scrollLeft += 1100; // jitna px scroll karwana ho
  }
  }

  function handlescrollleft() {
  if (scrollref.current) {
    scrollref.current.scrollLeft -= 1100;
  }
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
        <h2>Dairy, Bread & Eggs</h2>
        <div className="items" ref={scrollref}>
          {
            HomeBottomProducts.map((curr)=>{
              return (
                <>
                <div className="box">
                  <div className="item-photo">
                    <div className="item-image">
                      <img id="img"src={curr.image}></img>
                    </div>
                  </div>
                  <div className="stuffs">
                    <p id="clock-time"><LuClock2 />8 MINS</p>
                    <p id="curr-title">{curr.title}</p>
                    <p id="curr-weight">{curr.weight}</p>
                    <div className="price-bttn">
                      <p id="curr-price">₹{curr.price}</p>
                      <button id="add-bttn">ADD</button>
                    </div>
                  </div>
                </div>
                </>
              )
            })
          }
        </div>
        <div className="arrow1" onClick={handlescrollleft}>
          <FaChevronLeft />
        </div>
        <div className="arrow" onClick={handlescrollright}>
          <FaAngleRight />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home