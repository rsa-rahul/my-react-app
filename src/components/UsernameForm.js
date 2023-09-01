// Username.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Username() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const [lastname, setLastname] = useState('');

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
    // Do something with the user's username, e.g., store it in state or send it to an API.
    console.log(`User's username: ${username}`);
    navigate('/questionForm');
  };

  return (
    <div>
      <h1>Fill in your details and let's find out!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br/>
          Last name:  
          <input
            type="text"
            value={lastname}
            onChange={handleLastChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br/>
          Business Email:
          <input
            type="text"
            value={businessEmail}
            onChange={handleBusinessChange}
          />
        </label>
        {/*<button type="submit">Submit</button>*/}
        <label><br/>
          Mobile Number:
          <input
            type="text"
            value={mobile}
            onChange={handleMobileChange}
          />
        </label><br/>
        <button type="submit">I'm Ready to begin</button> // handle submit set in button property type
      </form>
    </div>
  );
}

export default Username; 

