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

    navigate('/questionForm');
  };

  return (
    <div>
      <h1>Fill in your details and let's find out!</h1>
      <form onSubmit={handleSubmit}>
        <label>

          <input
            type="text"
            placeholder="First Name*"
            required
            value={firstName}
            onChange={handleFirstnameChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br />

          <input
            type="text"
            placeholder="Last name*"
            required
            value={lastName}
            onChange={handleLastChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br />

          <input
            type="text"
            placeholder="Business Email*"
            required
            value={businessEmail}
            onChange={handleBusinessChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br />
          <input
            type="text"
            placeholder="Mobile no.(Optional)"
            value={mobile}
            onChange={handleMobileChange}
          />
        </label><br />
        <button type="submit">I'm Ready to begin</button>
      </form>
    </div>
  );
}

export default Firstname;

