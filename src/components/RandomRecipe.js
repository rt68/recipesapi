import React, { useState, useEffect } from 'react';
import spoonacularApi from '../service/spoonacularApi';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const handleGetRandomRecipe = () => {
    spoonacularApi.getRandomRecipe()
      .then(data => {
       
        setRecipe(data.recipes[0]);
      })
      .catch(error => {
        console.error('Failed to fetch a random recipe:', error);
      });
  };

  useEffect(() => {
    handleGetRandomRecipe();
  }, []);
// console.log(recipe);
  return (
    <div>
      <button onClick={handleGetRandomRecipe}>Get Random Recipe</button>
      {recipe && (
        <div>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title}/>
          <a href={recipe.spoonacularSourceUrl}>Go to Recipe</a>
          {/* Display other details of the recipe as needed */}
        </div>
      )}
    </div>
  );
};

export default RandomRecipe;
