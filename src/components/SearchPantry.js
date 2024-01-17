
import React, { useState, useEffect } from 'react';
import spoonacularApi from '../service/spoonacularApi'; // Importing the API service

function SearchPantry() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('pantryItems')) || []);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('pantryItems')) || [];
    setItems(storedItems);
  }, []);

  const fetchRecipes = async () => {
    const ingredients = items.map(item => item.name).join(',');
    try {
      const recipeData = await spoonacularApi.getRecipesByIngredients(ingredients);
      setRecipes(recipeData);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  }
console.log(items);
  return (
    <div>
      <button onClick={fetchRecipes}>Find Recipes From Pantry/Fridge Ingredients</button>
      {recipes.map(recipe => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <img src={recipe.image} alt={recipe.title}/>
          {/* <a href={recipe.spoonacularSourceUrl}>Go to Recipe</a> */}
          
          </div>
      ))}
    </div>
  );
}

export default SearchPantry;
