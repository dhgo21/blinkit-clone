
import { useState } from 'react'
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Components/Routing/Routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from 'react-router'
import Loader from './Components/Loader/Loader'
function App() {
  const [userd, setuserd] = useState(false);
  const [od,setod]=useState(true)
  const location = useLocation();

   // Checkout route ke liye false, baki sab ke liye true
  const shownavbar = location.pathname !== "/checkout" && location.pathname !== "/orderplaced";
  return (
    <>
      {shownavbar && <Navbar userd={userd} setuserd={setuserd}/>}
      <Routing setuserd={setuserd} od={od} setod={setod}/>
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        theme="dark"
        className="toaster"/>
    </>
  )
}

export default App
