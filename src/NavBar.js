import React , { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "./navbar.css";
import ClearIcon from '@material-ui/icons/Clear';
import MenuIcon from '@material-ui/icons/Menu';
const NavBar = () =>{
    const [click,setClick]= useState(false);
    const handleClick =()=> {
        setClick(!click);
    }
    return(<>
            <nav className="nav-bar">
                <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png" height="70px" width="70px" ></img>
                </NavLink>
                        <ul className={click ? "nav-menu active" : "nav-menu"}> 
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-links" activeClassName="active"  onClick={handleClick}>MENU</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/rewards"  className="nav-links" activeClassName="active" onClick={handleClick}>REWARDS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/gift"  className="nav-links" activeClassName="active" onClick={handleClick}>GIFT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/join"  className="nav-links" activeClassName="active" onClick={handleClick}>JOIN NOW</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/sign" className="nav-links" activeClassName="active" onClick={handleClick}>SIGN IN</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to="/shop"  className="nav-links" activeClassName="active" onClick={handleClick}>FIND SHOP</NavLink>
                            </li>
                        </ul>
                </div>
                <div className="nav-icon"  onClick={handleClick} >
                  {click?<ClearIcon/>:<MenuIcon/>}
                </div>
            </nav>
    </>);
}


export default NavBar;