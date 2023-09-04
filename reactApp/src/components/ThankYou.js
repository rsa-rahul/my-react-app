import React from 'react'
import { ReactComponent as ReactLogo } from './goodie.svg';

const ThankYou = () => {
  return (
    <div className='t1'>
        <h1>Thank You for participating</h1> 
        <div className='t2'><br/>
        Our team's here to help you learn more about our network.
        </div>
        <div className='t3'>
            <br/>
            P.S: Don't leave without your prize! ​
        </div>
        <div className='t4'>
          <ReactLogo/>
        </div>
    </div>
    
  )
}

export default ThankYou;