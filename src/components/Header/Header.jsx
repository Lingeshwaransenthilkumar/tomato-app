import "./Header.css"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div className="header">
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Welcome to Tomato, where your favorite dishes are just a click away! Experience the joy of fresh, delicious meals delivered straight to your door. Delight in Every Bite.</p>
            <Link to="#explore-menu"><button>View Menu</button></Link>
        </div>     
    </div>
  )
}

export default Header
