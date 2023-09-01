import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function CurrencyForm() {
    const validCurrencies = ['Euro', 'Dollar', 'Inr', 'Peso', 'Dirham'];
    const inValidCurrencies = ['EUR', 'IND', 'USA', 'afghanistan'];
    const allWords = [...validCurrencies, ...inValidCurrencies];

    const handleCorrectWordClick = (word) => {
        Navigate("/result");
    }
    const handleInCorrectWordClick = (word) => {
        Navigate("/failedpage");
    }
    return (
        <div>
            <h2>Select a valid currency</h2>
            <ul>
                {validCurrencies.map((word, index) => (
                    <li key={index}>
                        <button onClick={() => handleCorrectWordClick(word)}>{word}</button>
                    </li>
                ))}
            </ul>
            <ul>
                {inValidCurrencies.map((word, index) => (
                    <li key={index}>
                        <button onClick={() => handleInCorrectWordClick(word)}>{word}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CurrencyForm;
