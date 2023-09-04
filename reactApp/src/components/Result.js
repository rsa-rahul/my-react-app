// Result.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './Frame29.svg';
function Result() {
  return (
    <div className='res2'>
      <div className='res1'>
        <ReactLogo/>
      <h1>You're right!</h1>
      <br/>
      
      </div>
      <div className='res3'>
      We're on our way to cover this currency!
      </div>
      <br />
      <br />
      <div className='res4'>
        <span>
          <button type="submit">
          <Link to={"/currencyform"}>Play Again</Link>
          </button>
        </span>
        <span>
          <button type="submit">
            <Link to={"/ThankYou"}>Find out more from our experts</Link>
            </button>
        </span>
      </div>
    </div>
  );
}

export default Result;
