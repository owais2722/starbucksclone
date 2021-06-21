import React , { useState }  from "react";
import "./login.css";
const Login = ()=>{
    const[inputs,setInputs]=useState({email:"",pass:""})
    const [allEntry,setAllEntry]=useState([])
    const handleInput = (e)=>{
        const name = e.target.name;
        const value=e.target.value
        setInputs((preval)=>{
            if(name === "mail"){
                return{
                    email:value,
                    pass:preval.pass
                }
            }
            else if (name === "password"){
                return{
                    email:preval.email,
                    pass:value
                }
            }
        }
            
        )
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("form submitted")
        const newEntry={email:inputs.email, password:inputs.pass}
        setAllEntry([...allEntry,newEntry]);
        setInputs({email:"",pass:""})
    }


    return(<>
    <div className="card-container">
    <div className="container">
        <form className="form" onSubmit={handleSubmit}>
        <label className="mail">Email</label>
        <input type="email" name="mail" value={inputs.email}  onChange={handleInput} ></input>
        <label>Password</label>
        <input type="password" name="password" value={inputs.pass} onChange={handleInput}></input>
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





