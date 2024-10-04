import React, { useEffect } from 'react'
import { useAuth } from '../store/auth';
import { useParams } from 'react-router-dom';

function AdminUpdate() {

    const {authenticationToken,API}=useAuth();

    const [data,setData]=useState({
      username: '',
      email: '',
      phone: '',
    });

    const params=useParams();
    console.log("params single user:",params);

    const getSingleUser=async()=>{
        try {
            const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/admin/users/${params.id}`,{
                method: 'GET',
                headers: {
                    Authorization:authenticationToken,
                },
            });
            const data=await response.json();
            setData(data);

        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getSingleUser();
    }, []);
  
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setUpdate({
        ...user,
        [name]:value,
      });
    };
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await fetch(`https://rosssh-technical-10y1.onrender.com/api/admin/users/update/${params.id}`,
            {
                method: "PATCH",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:authenticationToken,
                },
                body:JSON.stringify(data),
            })
        } catch (error) {
            console.error(error);
        }
    }
  


  return (
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
  )
}

export default AdminUpdate