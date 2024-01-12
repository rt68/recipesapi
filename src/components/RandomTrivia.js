import React, { useState, useEffect } from 'react';
import spoonacularApi from '../service/spoonacularApi'; 

const RandomTrivia = () => {
  const [trivia, setTrivia] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    spoonacularApi.getRandomFoodTrivia()
      .then(data => {
        setTrivia(data.text); 
      })
      .catch(error => {
        console.error('Failed to fetch random food trivia:', error);
        setError(error);
      });
  }, []);
// console.log(trivia)
  return (
    <div>
      {trivia ? <div><h2>Food Trivia</h2><p>{trivia}</p> </div>: <p>Loading trivia...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default RandomTrivia;
