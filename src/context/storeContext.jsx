import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{
    
    const [cartItems,setCartItems]=useState({});

    // add items to cart using dictionary
    const addToCart = (itemId) =>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }


    // remove items from the cart
    const removeCart = (itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


    // to find total amount
    function totalCartAmount(){
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product._id === item);
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }


    /// passing all this values to required components
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeCart
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;