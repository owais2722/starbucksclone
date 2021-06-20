import React from "react";
import "./login.css";
const Login = ()=>{
    return(<>
    <div className="card-container">
    <div className="container">
        <form className="form">
        <label className="mail">Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <button className="login-btn">login</button>
        </form>
        <div className="description form" >
        <h4>Welcome</h4>
        <p>
        login and buy your fav coffee and snacks<br></br><br></br>you don't have a account?
        </p>
        
        <button className="sign-btn">sign up</button>
        </div>
    </div>
    </div>
    </>);
}

export default Login;





