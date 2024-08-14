import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
// we are going to use this as a popup or a modal
const LoginPopup = ({setShowLogin}) => {
  const [currentState,setCurrentState] = useState("Sign Up");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {/* name will be available only for registration */}
          {currentState==="Login" ? <></> : <input type="text" placeholder="Your name" required/>}
          <input type="email" placeholder="Your Email" required/>
          <input type="password" placeholder="Your Password" />
        </div>
        <button>{currentState==="Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required/>
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {currentState==="Login" ?
        <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p> :
        <p>Already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p> 
        }
      </form>
    </div>
  )
}

export default LoginPopup
