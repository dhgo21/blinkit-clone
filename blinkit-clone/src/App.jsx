
import './App.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Routing from './Components/Routing/Routing'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Navbar />
      <Routing />
      <ToastContainer 
        position="bottom-center"
        autoClose={3000}
        theme="dark"
        className="toaster"/>
    </>
  )
}

export default App
