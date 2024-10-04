import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

function Login() {
  const [user,setUser]=useState({
    email:"",
    password:"",
  });

  const navigate=useNavigate();
  const {storeTokenInLS,API}=useAuth();

  const handleInput=async(e)=>{
    console.log(e);
    let name=e.target.name;
    let value=e.target.value;
    setUser({
      ...user,
      [name]:value,
    });
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(e);
    try{
      const response= await fetch(`https://rosssh-technical-10y1.onrender.com/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
      });
      
      if(response.ok)
      {
        const data=await response.json();
        storeTokenInLS(data.token);
        setUser({email:"",password:""});
        toast.success("Login Success");
        navigate("/");
      }
      else{
        toast.error("Invalid Credentials");
      }
    }
    catch(error){
      console.error(error);
    }
  }
  return (
    <main>
      <section className="hero-section">
        <div className="grid-container">
          <div className="image-item">
            <img src="/login-page.png" width={400} height={400} />
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <span className="hero-title">LOGIN</span>
            <label htmlFor="email">Username</label>
            <input type="email" placeholder="Email or Username" id="email" name="email" onChange={handleInput} value={user.email} autoComplete="off" required />

            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" id="password" name="password" onChange={handleInput}  value={user.password} autoComplete="off" required />
            <button type="submit">Submit</button>
            <div className="forgot-buttons">
              <a href="/forgot">Forgot Password ?</a>
              <a href="/register">New User ?</a>
            </div>
            <div className="signin-icons">
            <a href="/facebook-signin">
                <FontAwesomeIcon icon={faFacebook} style={{ color: '#4285F4' }}/>{" "}
              </a>  
              
              <a href="/google-signin">
                <FontAwesomeIcon icon={faGoogle} style={{ color: "greenyellow" }}/>{" "}
              </a>
              <a href="/linkedin-signin">
                <FontAwesomeIcon icon={faLinkedin} style={{ color: '#4285F4' }}/>{" "}
              </a>
            </div>
            <span className="reach-text">
              You can reach us anytime via any@rosssh.com
            </span>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
