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

function Routing({ setuserd }) {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/orderdetails" element={<Orderdetails/>}/>
        <Route path="/dairy-bread-eggs" element={<DBE />} />
        <Route path="/roll-paper-tob" element={<Rollpapertob />}/>
        <Route path="/Snacks-munchies" element={<SnacksMunchies />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/orderplaced" element={<Orderplaced />}/>
        
        {/* Nested routing for Account */}
      <Route path="/account" element={<Account setuserd={setuserd}/>} >
        <Route path="myaddresses" element={<Myaddresses />} />
        <Route path="myorders" element={<Myorders />}/>
        <Route path="egiftcards" element={<Giftcard />}/>
        <Route path="accountprivacy" element={<Accpriv />}/>
      </Route>

    </Routes>
    </>
  )
}

export default Routing