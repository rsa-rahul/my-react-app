// Result.js
import React from 'react';
import { Link } from 'react-router-dom';
function Result() {
  return (
    <div>
      <h1>You're right!</h1>
      We're on our way to cover this currency!
      <br />
      <br />
      <div>
        <span>
          <button type="submit">Play Again</button>
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
