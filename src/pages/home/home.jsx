import { useState } from "react"
import Exploremenu from "../../components/exploreMenu/Exploremenu"
import Header from "../../components/Header/Header"
import "./home.css"
import FoodDisplay from "../../components/foodDisplay/foodDisplay"
import Appdownload from "../../components/Appdownload/Appdownload"

const Home = () => {
  const [category,setCategory] = useState("All");
  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <Appdownload/>
    </div>
  )
}

export default Home
