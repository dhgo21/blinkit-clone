
import {  useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Components/Routing/Routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router'
function App() {
  const [userd, setuserd] = useState(false);
  const [od,setod]=useState(false)
  const location = useLocation();
  const [backtoggle,setbacktoggle]=useState(false)

   // Checkout route ke liye false, baki sab ke liye true
  const shownavbar = location.pathname !== "/checkout" && location.pathname !== "/orderplaced";
  return (
    <>
      {shownavbar && <Navbar userd={userd} setuserd={setuserd}/>}
      <Routing setuserd={setuserd} od={od} setod={setod} backtoggle={backtoggle} setbacktoggle={setbacktoggle}/>
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        theme="dark"
        className="toaster"/>
    </>
  )
}

export default App
