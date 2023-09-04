// Result.js
import React from 'react';
import { Link } from 'react-router-dom';
import ThankYou from './ThankYou';
function FailedPage() {
  return (
    <div >
      <div className='container'>
      <div>
        <box>
          <h1 className='f1'>EUR</h1>
        </box>
        <h3>We've got it covered</h3>
      </div>
      <div>
        <span>Country</span> <span>Receive Coverage</span> <span>Penetration Coverage</span>
      </div>
      <div>
        <span>Aland Islands</span> <span>All Banks</span> <span>100%</span>
      </div><br/>
      <div>
        Delivery Time
        <br/>
        Some day deliveries
      </div>
      <div>
        <div><br/>
          You've Got 2 more attempts left
        </div>
        </div>
        </div>
        <div>
        <span>
          <button type="submit"><Link to='/CurrencyForm'>Try Again</Link></button>
        </span>
        <span>
          <button type="submit"><Link to={'/ThankYou'}> Find out more from our experts</Link></button>
        </span>
      </div>
    </div>
  );
}

export default FailedPage;
