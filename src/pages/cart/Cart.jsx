import { useContext} from "react"
import "./Cart.css";
import { StoreContext } from "../../context/storeContext"
// useNavigate is used to make button work line links
import { useNavigate } from "react-router-dom"

const Cart = () => {
  const navigate  = useNavigate()
  const {cartItems,food_list,removeCart,totalCartAmount} = useContext(StoreContext);
  return (
    <div className="cart">
      {Object.keys(cartItems).length > 0 ? (
        <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {/* item._id is ised to get id of a food item */}
        {food_list.map((item)=>{
          if(cartItems[item._id]>0){
            return(
              <>
              <div className="cart-items-title cart-items-item" key={item._id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${item.price * cartItems[item._id]}</p>
                <p className="cross" onClick={()=>removeCart(item._id)}>X</p>
              </div>
              <hr />
              </> 
            )
          }
        })}
      </div>
      
      ):(
        <div className="empty-cart">
          <p>Your cart is empty &nbsp; <span className="sad">&#9785;</span></p>
          <img src="https://www.fudcoshop.com/pub/static/frontend/MageBig/martfury_layout04/en_GB/images/empty-cart.svg" alt="Empty-cart-image"/>
        </div>
      )}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub total</p>
              <p>${totalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${totalCartAmount()===0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total :</b>
              <b>${totalCartAmount() === 0 ? 0 : totalCartAmount()+2}</b>
            </div>
          </div>
          {totalCartAmount() === 0 ? <button className="disabled" disabled>Proceed To Checkout</button> : <button onClick={()=>navigate('/order')}>Proceed To Checkout</button>}
        </div>
        <div className="cart-promo">
          <div>
            <p>If you have promocode,Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Enter promocode" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
