// QuestionForm.js
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

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
    <div>
      <h1>You have to guess which currencies terrapay does not support</h1>
      <Link to="/CurrencyForm">Click To Continue</Link>
    </div>
  );
}

export default QuestionForm;
