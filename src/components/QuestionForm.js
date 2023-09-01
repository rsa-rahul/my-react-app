// QuestionForm.js
import React, { useState } from 'react';

function QuestionForm() {
  const [answer, setAnswer] = useState('');

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the user's answer, e.g., submit it to an API or store it in state.
    console.log(`User's answer: ${answer}`);
  };

  return (
    <div>
      <h1>Which currencies terrapay does not support</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Answer:
          <input
            type="text"
            value={answer}
            onChange={handleAnswerChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default QuestionForm;
