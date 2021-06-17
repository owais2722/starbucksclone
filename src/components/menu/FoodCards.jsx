import React from "react";
import "./menu.css"
const FoodCards = (props)=>{
    return(<>
     <div className="food-card-container">
        <div className="food-card-img">
            <img  src={props.src} width="100px"  height="100px" />
        </div>
        <div className="food-item"><h2>{props.itemname}</h2></div>
     </div>
    </>);
}




export default FoodCards;