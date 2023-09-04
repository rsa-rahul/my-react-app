// Result.js
import React from 'react';
import { Link } from 'react-router-dom';

function FailedPage() {
  return (
    <div  className='container'>
      <div>
        <div>
          <h1 className='f1'>EUR</h1>
          <h3>We've got it covered</h3>
        </div>
        <div>
          <table>
            <thead id='f11'>
              <tr>
                <th>Country</th>
                <th>Receive Coverage</th>
                <th>Penetration Coverage</th>
              </tr>
            </thead>
            <tbody id='f12'>
              <tr>
                <td>Aland Islands</td>
                <td>All Banks</td>
                <td>100%</td>
              </tr>
            </tbody>
          </table>
          <div className='f13'>
            <h3>Delivery Time</h3>
            Same day deliveries
          </div>
        </div>
        <div className='f14'>
          <br />
          You've Got<span id='f114'> 2 more attempts</span> left 
        </div>
        <br/>
      </div>
      <div className='f15'>
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
