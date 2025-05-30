import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'
import Orderdetails from '../OrderDetails/Orderdetails'
import DBE from '../See-all/DBE'
import Rollpapertob from '../See-all/Rollpapertob'
import SnacksMunchies from '../See-all/SnacksMunchies'

function Routing() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/orderdetails" element={<Orderdetails/>}/>
        <Route path="/dairy-bread-eggs" element={<DBE />} />
        <Route path="/roll-paper-tob" element={<Rollpapertob />}/>
        <Route path="/Snacks-munchies" element={<SnacksMunchies />}/>
    </Routes>
    </>
  )
}

export default Routing