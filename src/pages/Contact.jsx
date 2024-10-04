import React, { useState } from 'react'
import { useAuth } from '../store/auth'

function Contact() {
  const [userData, setUserData]=useState(true);
  const [contact,setContact]=useState({
    username: '',
    email: '',
    message: '',
  });

  const {API}=useAuth();

  const handleInput=async(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setContact({
      ...contact,
      [name]:value,
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(e);
    try {
      const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/form/contact`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });
      if(response.ok)
      {
        const data=await response.json();
        console.log(data);
      }
    } catch (error) {
        console.log(error);
    }    
  }
  const {user}=useAuth();
  if(userData && user)
  {
    setContact({
      username:user.username,
      email:user.email,
      message:"",
    })
    setUserData(false);
  }

  return (
    <>
      <section className='hero-section'>
        <div className='grid-container'>
          <div className='image-item'>
              <img src='/call-center.png' alt='about-icon' width={420} height={420} />
          </div>
          <div className='hero-content'>
            <form onSubmit={handleSubmit}>
              <div className="form-container">
                <span className='hero-title'>CONTACT US</span>
                <label htmlFor='user  name'>Name</label>
                <input type='text' name='username' id='username' placeholder='Enter your Name'  value={contact.username} onChange={handleInput} autoComplete='on'required/>

                <label htmlFor='email'>Email</label>
                <input type='email' name='email' placeholder='Enter your Email' value={contact.email} onChange={handleInput} autoComplete='on'required/>

                <label htmlFor='message'>Message</label>
                <textarea type='text' name='message' placeholder='Enter your Message' rows={7} value={contact.message} onChange={handleInput} autoComplete='off' required/>

                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    <div className='maps-container'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d146253.38697085623!2d73.07965881489345!3d22.322457950526957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1724376916359!5m2!1sen!2sin" width='100%' height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </>
  )
}

export default Contact