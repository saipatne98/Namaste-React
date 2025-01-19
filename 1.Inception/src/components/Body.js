import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";




const Body = () => {
  //reslist=[{},{}]

    let [restaurantList,setRestaurantList]=useState(resList) ;

    return <div className="body">
        
        <div className="filter">
         <button className="filter-btn"
         onClick={()=>{
            let filteredList= restaurantList.filter((res)=>{
               return res.card.card.info.avgRating > 4.1;
            });
            setRestaurantList(filteredList);
            console.log(resList.length);
            
         }}
         >Top rated Restaurants</button>

        </div>
        <div className="res-container">
        
           {restaurantList.map(restaurant => ( 
                      <RestaurantCard 
                      key={restaurant.card.card.info.id}
                      resData={restaurant}/>
                ))}

        </div>
    </div>
}

export default Body;