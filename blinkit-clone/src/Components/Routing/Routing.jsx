import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Home/Home'
import Cart from '../Cart/Cart'

function Routing() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
    </Routes>
    </>
  )
}

export default Routing