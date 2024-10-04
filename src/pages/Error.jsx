import React from 'react'

function Error() {
  return (
    <div className='error-container'>
        <span className='error-404'>404</span>
        <span className='error-message'>Page Not Found</span>
        <div>
            <a href='/' ><button className='error-link'>Back to Home</button></a>
        </div>
    </div>
  );
};

export default Error