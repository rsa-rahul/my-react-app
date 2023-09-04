import React from 'react';
import { Link } from 'react-router-dom';
import mygif from '../assets/mygif.gif';

function AfterUsername() {
  return (
    <div>
      
      <div className='au1'>
      <img src={mygif}></img><br/>
        <h2>Put your game face up and <br/>gear up<br/>for the challenge</h2>
        <br/>
        <Link to="/QuestionForm">Okay</Link>
      </div>
    </div>
  );
}

export default AfterUsername;
