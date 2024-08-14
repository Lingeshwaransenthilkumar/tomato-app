import { useContext } from "react";
import "./foodDisplay.css"
import { StoreContext } from "../../context/storeContext";
import FoodItem from "../FoodItem/foodItem";

function FoodDisplay({category}){
    const {food_list} = useContext(StoreContext);
    // used to filter food using category or display all items
    const filterFoodList = food_list.filter(item=> category==="All" || category===item.category)
    return(
        <div className="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {filterFoodList.map((item,index)=>(
                    <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                ))}
            </div>

        </div>
    )

}

export default FoodDisplay;