import { Routes, Route } from "react-router-dom"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/home"
import Cart from "./pages/cart/Cart"
import Placeorder from "./pages/placeOrder/Placeorder"
import Footer from "./components/footer/footer"
import { useState } from "react"
import LoginPopup from "./components/LoginPopup/LoginPopup"

function App(){
  // for modal details
  const[showLogin,setShowLogin] = useState(false);

  return(
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin}/> : null }   
     <div className="app">
      {/* passing modal details to navbar */}
       <Navbar setShowLogin={setShowLogin} />
       <Routes>
        <Route path='/tomato-app' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Placeorder/>}/>
       </Routes>
     </div>

     <Footer/>

    </>

  )
}

export default App