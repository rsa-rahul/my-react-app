import React, { useState } from 'react';
import { Link, Navigate, useHistory } from 'react-router-dom';
import FailedPage from './FailedPage';

function customShuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
}
function CurrencyForm() {
    const validCurrencies = ['Euro', 'Dollar', 'Inr', 'Peso', 'Dirham'];
    const inValidCurrencies = ['EUR', 'IND', 'USA', 'afghanistan'];

    const validCurrenciesWithIdentifier = validCurrencies.map(word => [word, "valid"]);
    const invalidCurrenciesWithIdentifier = inValidCurrencies.map(word => [word, "invalid"]);
    const allWords = [
        ...validCurrenciesWithIdentifier, ...invalidCurrenciesWithIdentifier];

    const shuffledWords = customShuffleArray(allWords);

    const handleCorrectWordClick = (word) => {
        Navigate("/result");
    }
    const handleInCorrectWordClick = (word) => {
        Navigate("/failedpage");
    }
    const wordToLinkRenderer = (wordArray, index) => {
        let word = wordArray[0];
        let isValid = wordArray[1];
        if(isValid==="valid"){
            return <Link className="custom-link" to="/result" >{word} </Link>
        }
        else{
            return <Link className="custom-link" to="/failedpage" >{word} </Link>
        }
    }
    return (
        <div>
            <h2>Select a valid currency</h2>
            {shuffledWords.map(wordToLinkRenderer)}
        </div>
    );
}

export default CurrencyForm;
