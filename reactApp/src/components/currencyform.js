import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function customShuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
}
function CurrencyForm() {
    const [data, setData] = useState({
        validCurrencies: [],
        invalidCurrencies: [],
    });

    const shuffledCurrencies = GetCurrencies(setData, data);
    const wordToElementRenderer = (wordArray, index) => {
        let word = wordArray[0];
        let isValid = wordArray[1];
        if (isValid === "valid") {
            return <Link className="custom-link" to="/result" >{word} </Link>
        }
        else {
            return <Link className="custom-link" to="/failedpage" >{word} </Link>
        }
    }
    function chunkArray(arr, chunkSize) {
        const chunkedArray = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            chunkedArray.push(chunk);
        }
        return chunkedArray;
    }

    function getMarqueeForWords(words, orientationIndex) {
        let direction = (orientationIndex %2==0)? "left":  "right";
        return <marquee direction={direction}>
            {words.map(wordToElementRenderer)}
        </marquee>
    }
    return (
        <div className='cf1'>
            <div className='cf2'>{chunkArray(shuffledCurrencies, 20).map((words,index) => getMarqueeForWords(words, index))}
            </div>
        </div>
    );
}

function GetCurrencies(setData, data) {
    useEffect(() => {
        // Make the API request when the component mounts
        axios.get('http://localhost:5001/api/readcurrencydata')
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error('Error fetching currency data:', error);
            });
    }, []);

    const validCurrenciesWithIdentifier = data.validCurrencies.map(word => [word, "valid"]);
    const invalidCurrenciesWithIdentifier = data.invalidCurrencies.map(word => [word, "invalid"]);
    const allWords = [
        ...validCurrenciesWithIdentifier, ...invalidCurrenciesWithIdentifier
    ];

    const shuffledWords = customShuffleArray(allWords);
    return shuffledWords;
}

export default CurrencyForm;