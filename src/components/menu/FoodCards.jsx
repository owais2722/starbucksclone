import React from "react";
import coffee from "./images/coffee.jpg";
import "./menu.css"
const FoodCards = ()=>{
    return(<>
     <div className="food-card-container">
        <div className="food-card-img">
            <img  src={coffee} width="100px"  height="100px" />
        </div>
        <div className="food-item"><h2>Hot Coffee</h2></div>
     </div>
    </>);
}




export default FoodCards;