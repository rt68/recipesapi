import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      setIsLoading(true);
      axios.get('https://api.spoonacular.com/recipes/complexSearch', {
        params: {
          apiKey: 'YOUR_API_KEY',
          query: 'pasta',
          number: 10
        }
      })
      .then(response => {
        setRecipes(response.data.results);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
    }, []);
  
    return (
      <div>
        {isLoading && <p>Loading recipes...</p>}
        {error && <p>Error fetching recipes: {error.message}</p>}
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  