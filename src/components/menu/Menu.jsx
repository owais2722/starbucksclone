import React from "react";
import FoodCards from "./FoodCards";
 const Menu =()=>{
     return(<>
         <div className="menu-container">
                <div className="side-bar">
                    <div className="side-bar-list">
                    <ul>
                        <li><h3>Drinks</h3></li>
                        <li>Hot Coffee</li>
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
                <FoodCards/>
                <FoodCards/>
                <FoodCards/>
                <FoodCards/>
                <FoodCards/>
                <FoodCards/>
                </div>
    
         </div>
     </>);
 }



 export default Menu;