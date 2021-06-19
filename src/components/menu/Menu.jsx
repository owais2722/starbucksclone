import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import FoodCards from "./FoodCards";
import {ImagesFood,ImagesHome,ImagesDrinks} from "./img";
 const Menu =()=>{
     function carddisp (value){
        return(<FoodCards src={value.src} itemname={value.itemname} link={value.to} />);
     };
     return(<>
         <div className="menu-container">
                <div className="side-bar">
                    <div className="side-bar-list">
                    <ul>
                        <li><h3>Drinks</h3></li>
                        <li><NavLink to="/coffee"  className="navlinks">Hot Coffee</NavLink></li>
                        <li>Hot Teas</li>
                        <li>blended beverages</li>
                        <li>Cold Coffee</li>
                        <li>Ice Teas</li>
                        <li>Cold Drinks</li>
                    </ul>
                    <ul>
                        <li><h3>Food</h3></li>
                        <li>BreakFast</li>
                        <li>Bakery</li>
                        <li>Lunch</li>
                        <li>Snacks & Sweet</li>
                    </ul>
                    <ul>
                        <li><h3>AT Home Coffee</h3></li>
                        <li>Whole Bean</li>
                        <li>VIA Instant</li>
                    </ul>
                    </div>
                </div>
                <div className="card-position">
                <div className="food-title"><h2>Drinks</h2></div>
                <div className="card-drinks">
                {ImagesDrinks.map(carddisp)}
                </div>
                <div className="food-title"><h2>Food</h2></div>
                <div className="card-food">
                {ImagesFood.map(carddisp)}
                </div>
                <div className="food-title"><h2>At Home Coffee</h2></div>
                <div className="card-athome">
                {ImagesHome.map(carddisp)}
                </div>
                </div>
         </div>
     </>);
 }



 export default Menu;