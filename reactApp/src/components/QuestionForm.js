// QuestionForm.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ReactComponent as ReactLogo } from './currencypage.svg';

function QuestionForm() {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the user's answer, e.g., submit it to an API or store it in state.
    console.log(`User's answer: ${answer}`);
    Navigate("/CurrencyForm");
  };

  return (
    <div className='qf1'>
      <div className='qf2'>
        <h1>Guess</h1>
      </div>
      <div className='qf3'>
        the currencies TerraPay does not support
      </div>
      <br/>
      <Link to="/CurrencyForm">Click To Continue</Link>
      <div className='qf4'>
      <ReactLogo/>
      </div>
    </div>
  );
}

export default QuestionForm;
