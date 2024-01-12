import React, { useState, useEffect } from 'react';
import spoonacularApi from '../service/spoonacularApi'; 

const RandomJoke = () => {
  const [joke, setJoke] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    spoonacularApi.getRandomFoodJoke()
      .then(data => {
        setJoke(data.text); 
      })
      .catch(error => {
        console.error('Failed to fetch a random joke:', error);
        setError(error);
      });
  }, []);

//   console.log(joke);
  return (
    <div>
      {joke ? <div><h3>Random Food Joke</h3><p>{joke}</p></div> : <p>Loading joke...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default RandomJoke;
