import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


function Register() {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    password:"",
  });
  const navigate=useNavigate();
  const {storeTokenInLS,API}=useAuth();

  const handleInput=(e)=>{
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
    console.log(user);
  try {
    const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify(user),
    });

    if(response.ok)
    {
      const data = await response.json();
      console.log("res from server",data);
      storeTokenInLS(data.token);
      setUser({username:"",email:"",phone:"",password:""});
      toast.success("Registration Successfull");
      navigate("/"); 
    }
    else{
      const errorData = await response.json();
      console.error("Error registration:", errorData);
      toast.error(`${errorData.message}  -  ${errorData.extraDetails}`);
    }

  } catch (error) {
    alert("Error submitting registration from backend, please try after some time:");
    console.error(error);
  };
    
  };
  return (
    <section>
    <main className='hero-section'>
      <div className='grid-container'>
        <div className='image-item'>
          <img src='/login-page.png' width={420} height={420}/>
        </div>
        <form className='form-container' onSubmit={handleSubmit}>
          <span className='hero-title'>SIGN UP</span>
        
          <label htmlFor='username'>Username</label>
          <input type='text' placeholder='Enter Username' name='username' id='username' onChange={handleInput} value={user.username} autoComplete='on' required />

          <label htmlFor='email'>Email</label>
          <input type='email' placeholder='Enter Email' name='email' id='email' onChange={handleInput} value={user.email} autoComplete='on' required />

          <label htmlFor='phone'>Phone</label>
          <input type='text' placeholder='Enter Phone Number' name='phone' id='phone' onChange={handleInput} value={user.phone} autoComplete='on' required/>

          <label htmlFor='password'>Password</label>
          <input type='password' placeholder='Enter Password' name='password' id='password' onChange={handleInput} value={user.password} autoComplete='off' required/>
          <button type='submit'>Submit</button>
          <div className='forgot-buttons'>
            <a href='/login'>Already Have an Account ?</a>
          </div>
          <span className='reach-text'>You can reach us anytime via any@rosssh.com</span>
        </form>
      </div>
    </main>
  </section>
  )
}

export default Register