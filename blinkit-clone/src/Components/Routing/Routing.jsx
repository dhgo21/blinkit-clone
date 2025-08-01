import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import Orderdetails from '../OrderDetails/Orderdetails'
import DBE from '../See-all/DBE'
import Rollpapertob from '../See-all/Rollpapertob'
import SnacksMunchies from '../See-all/SnacksMunchies'
import Account from '../Account/Account'
import Myaddresses from '../Account/Myaddress/Myaddresses'
import Myorders from '../Account/Myorders/Myorders'
import Giftcard from '../Account/E-gift/Giftcard'
import Accpriv from '../Account/Account priv/Accpriv'
import Checkout from '../Checkout/Checkout'
import Orderplaced from '../Order Placed/Orderplaced'
import Orderhistory from '../Account/OrderHistory/Orderhistory'
import Pharmacy from '../Pharmacy/Pharmacy'
import Petcare from '../PetCare/Petcare'
import Babycare from '../BabyCare/Babycare'
import Paancorner from '../PaanCorner/Paancorner'
import Aata from '../Aata/Aata'
import Bakery from '../bakery-Bis/Bakery'
import Breakfast from '../BreakfastInstant/Breakfast'
import Chicken from "../ChickenMeet/Chicken"
import Cleaning from '../Cleaning/Cleaning'
function Routing({ setuserd,setod,od,setbacktoggle,backtoggle}) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/orderdetails" element={<Orderdetails/>}/>
        <Route path="/dairy-bread-eggs" element={<DBE />} />
        <Route path="/roll-paper-tob" element={<Rollpapertob />}/>
        <Route path="/Snacks-munchies" element={<SnacksMunchies />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/orderplaced" element={<Orderplaced setod={setod} />}/>
        <Route path="/pharmacy-products" element={<Pharmacy />}/>
        <Route path="/pet-care" element={<Petcare />}/>
        <Route path="/baby-care" element={<Babycare />}/>
        <Route path="/paan-corner" element={<Paancorner />}/>
        <Route path="/aata" element={<Aata />}/>
        <Route path="/bakery-biscuits" element={<Bakery />}/>
        <Route path="/breakfast-instantfood" element={<Breakfast />}/>
        <Route path="/chicken-meat" element={<Chicken />}/>
        <Route path="/cleaning-products" element={<Cleaning />}/>
        
        {/* Nested routing for Account */}
      <Route path="/account" element={<Account setuserd={setuserd}/>} >
        <Route path="myaddresses" element={<Myaddresses />} />
        <Route path="myorders" element={<Myorders od={od} setbacktoggle={setbacktoggle} backtoggle={backtoggle}/>}>
          <Route path="orderinfo" element={<Orderhistory />}/>
        </Route>
        <Route path="egiftcards" element={<Giftcard />}/>
        <Route path="accountprivacy" element={<Accpriv />}/>
      </Route>
    </Routes>
    </>
  )
}

export default Routing