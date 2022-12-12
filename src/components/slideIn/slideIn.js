import React from 'react'
import './slideIn.css'
const SlideIn = (startAnimation) => {
  const transtionProperties = startAnimation ? {marginLeft: '1190px'}:{};
  return (
    <div className='slide-in' style={transtionProperties}>
    <h4>New Conditon</h4>
      <div className='tite'>
        
      
      </div>
    
    </div>
  )
}

export default SlideIn