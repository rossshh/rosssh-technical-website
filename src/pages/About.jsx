import React from 'react'
import { useAuth } from '../store/auth';

function About() {
  const {user}=useAuth();

  return (
    <main>
      <section className='hero-section'>
        <div className='grid-container'>
          <div className='image-item'>
            <img src='/about.png' alt='about-icon' width={420} height={420} />
          </div>
          <div className='hero-content'>
            <span className='hero-title'>ABOUT US</span>
            <br />
            <p>Welcome, {user? user.username : ""}</p>
            <p>Rosssh Technical website is all about creativity and innovative work in the field of Technology.
                  We provide web development courses videos, MCS important videos and technology videos and articles. 
                    You will get all of my youtube videos source code and you are free to use it and make changes.
                    Please give us your valuable feedback and suggestions. We appreciate your opinions and will use it to evaluate changes and make improvements on our blog.
                    Here is my Youtube channel link  :) 
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About