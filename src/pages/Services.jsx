import React from 'react'
import { useAuth } from '../store/auth'

function Services() {

  const {services}=useAuth();
  return (
    <>
      <div className="services-container">
        {services.map((curElem,index)=>{
          const {price,description,name}=curElem;
          return(
            <div className='card-container'>
              <div className="card-content">
                <img src="/about.png" alt="icon" width={210}  />
                <h2>{name}</h2>
                <p>{description}</p>
                <br/>
                <h4>${price}</h4>
                <br/>
                <button style={{fontSize:'0.8rem'}}>Buy Now</button>
              </div>
            </div>
          )
        })
      }   
      </div>  
    </>  
  )
}

export default Services