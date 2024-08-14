/* eslint-disable react/prop-types */

import { useState,useContext} from "react";
import { assets } from "../../assets/assets";
import "./navbar.css";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/storeContext";

function Navbar({setShowLogin}){
  const[menu,setMenu]= useState("Home");
  const {cartItems} = useContext(StoreContext)
  return (
    <div className="navbar">
      <Link to="/tomato-app"><img src={assets.logo} alt="logo" className="logo" /></Link>
      <ul className="navbar-menu">
        <Link to="/tomato-app" onClick={()=>{setMenu("Home")}} className={menu === "Home"?"active":"normal"}>Home</Link>
        <a href="#explore-menu" onClick={()=>{setMenu("Menu")}} className={menu === "Menu"?"active":"normal"}>Menu</a>
        <a href="#app-download" onClick={()=>{setMenu("Mobile-app")}} className={menu === "Mobile-app"?"active":"normal"}>Mobile-app</a>
        <a href="#footer" onClick={()=>{setMenu("Contact-us")}} className={menu === "Contact-us"?"active":"normal"}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search-icon" />
        <div className="navbar-search-icon">
            <Link to="/cart"><img src={assets.basket_icon} alt="" /></Link>
            {Object.keys(cartItems).length > 0 ? <div className="dot"></div> : <></> }            
        </div>
        <button onClick={()=>{setShowLogin(true)}}>Sign in </button>
      </div>
    </div>
  )
}

export default Navbar
