import React, { useState } from 'react';
import spoonacularApi from '../service/spoonacularApi';

const IngredientsRecipe = () => {
  const [ingredients, setIngredients] = useState('');
  const [recipes, setRecipes] = useState([]);

  const handleSearch = () => {
    spoonacularApi.getRecipesByIngredients(ingredients)
      .then(data => {
        setRecipes(data);
      })
      .catch(error => {
        console.error('Failed to fetch recipes:', error);
      });
  };

  return (
    <div>
      <input
        type="text"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
        placeholder="Enter ingredients"
      />
      <button onClick={handleSearch}>Find Recipes</button>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          </div>
      ))}
    </div>
  );
};

export default IngredientsRecipe;
