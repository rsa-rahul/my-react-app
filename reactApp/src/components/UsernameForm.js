// Username.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Firstname() {
  const [firstName, setFirstname] = useState('');
  const navigate = useNavigate();

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const [lastName, setLastname] = useState('');

  const handleLastChange = (e) => {
    setLastname(e.target.value);
  };

  const [businessEmail, setBusinessEmail] = useState('');

  const handleBusinessChange = (e) => {
    setBusinessEmail(e.target.value);
  };

  const [mobile, setMobile] = useState('');

  const handleMobileChange = (e) => {
    setMobile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let userData = {
      firstName,
      lastName,
      businessEmail,
      mobile
    }
    axios.post('http://localhost:5001/api/users', userData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Excel data:', error);
        throw error;
      });

    navigate('/AfterUsername');
  };

  return (
    <section>
      <div className='username1'>
        <h1>Fill in your details and let's find out!</h1>
        <form onSubmit={handleSubmit}>
        <div className='username3'>
        <span>
            <label className='username2'>
              <input className='username4'
                type="text"
                placeholder="First Name*"
                required
                value={firstName}
                onChange={handleFirstnameChange}
              />
            </label>
          </span>
          <span>
            <label className='username2'>
              <input className='username4'
                border-radius="40px"
                type="text"
                placeholder="Last name*"
                required
                value={lastName}
                onChange={handleLastChange}
              />
            </label>
            </span>
          <span>
          <label className='username2'><br />

            <input className='username4'
              type="text"
              placeholder="Business Email*"
              required
              value={businessEmail}
              onChange={handleBusinessChange}
            />
          </label>
          </span>
          <span>
          <label className='username2'>
            <input className='username4'
              type="text"
              placeholder="Mobile no.(Optional)"
              value={mobile}
              onChange={handleMobileChange}
            />
          </label><br />
          
          </span>
          </div>
          <div>
          <br />
          <button type="submit">I'm Ready to begin</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Firstname;

