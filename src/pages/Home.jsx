import React from 'react'

function Home() {
  return (
    <main>
    <section className='hero-section'>
        <div className="grid-container">
          <div className="hero-content">
            <h3>We are World Best IT Company</h3>
            <h1>Welcome to <span className="hero-text">Rosssh Technical</span></h1>
            <p>
              Are you ready to take your business to the next level with cutting-edge IT solutions?
              Look no further! At Rosssh Technical, we specialize in providing innovative IT services and solutions 
              tailored to meet your unique needs.
            </p>
              <a href="/contact"><button className='hero-button'>Connect Now</button></a>
              <a href="/about"><button className='hero-button'>Learn More</button></a>  
          </div>
          
          <div className="image-item">
            <img src="/flat-creativity-concept-illustration.png"      
                alt='homepage-icon'
                width={350} height={350} 
            />
          </div>
        </div>
    </section>
  </main>
  )
}

export default Home