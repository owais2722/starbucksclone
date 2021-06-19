import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./menu.css"
const FoodCards = (props)=>{
    return(<>
     <div className="food-card-container">
        <div className="food-card-img">
            <img  src={props.src} width="100px"  height="100px" />
        </div>
        <div className="food-item"><NavLink  className="navlinks" activeClassName="active" to={props.link}><h2>{props.itemname}</h2></NavLink></div>
     </div>
    </>);
}




export default FoodCards;