import React, { useEffect } from 'react'
import "./Account.css"
import { Link, Outlet } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import { GrMapLocation } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { MdCardGiftcard,MdOutlineLock} from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
function Account({ setuserd }) {
     const { user , logout } = useAuth0();

     useEffect(() => {
    setuserd(false);
  }, []);
  return (
    <>
    <div className="account">
        <div className="acc-op">
            <Link className='acc1'>{user?.email}</Link>
            <Link className='acc' to="myaddresses"><div className='a1'><GrMapLocation />My Addresses</div></Link>
            <Link className='acc' to="myorders"><div className='a2'><BsBoxSeam />My Orders</div></Link>
            <Link className='acc' to="egiftcards"><div className='a3'><MdCardGiftcard />E-Gift Cards</div></Link>
            <Link className='acc' to="accountprivacy"><div className='a4'><MdOutlineLock />Account Privacy</div></Link>
            <Link className='acc' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><div className='a5'><IoIosLogOut />Logout</div></Link>
        </div>
        <div className="acc-del">
            <Outlet />
        </div>
    </div>
    
    </>
  )
}

export default Account