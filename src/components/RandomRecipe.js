import React, { useState } from 'react';
import spoonacularApi from '../service/spoonacularApi';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);

  const handleGetRandomRecipe = () => {
    spoonacularApi.getRandomRecipe()
      .then(data => {
        // Assuming the API returns an array of recipes, even if it's just one
        setRecipe(data.recipes[0]);
      })
      .catch(error => {
        console.error('Failed to fetch a random recipe:', error);
      });
  };
console.log(recipe);
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
