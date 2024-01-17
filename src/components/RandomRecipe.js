import React, { useState, useEffect } from 'react';
import spoonacularApi from '../service/spoonacularApi';

const RandomRecipe = () => {
  const [recipe, setRecipe] = useState(null);
  const [iframeSrc, setIframeSrc] = useState('');

  const handleGetRandomRecipe = () => {
    spoonacularApi.getRandomRecipe()
      .then(data => {
       
        setRecipe(data.recipes[0]);
        setIframeSrc(''); // Reset iframe when loading new recipe
      })
      .catch(error => {
        console.error('Failed to fetch a random recipe:', error);
      });
  };

  useEffect(() => {
    handleGetRandomRecipe();
  }, []);
  const handleGoToRecipe = () => {
    if (recipe && recipe.spoonacularSourceUrl) {
      setIframeSrc(recipe.spoonacularSourceUrl);
    }
  };
// console.log(recipe);
  return (
    <div>
      <button onClick={handleGetRandomRecipe}>Get Random Recipe</button>
      {recipe && (
        <div>
          <h3>{recipe.title}</h3>
          <img src={recipe.image} alt={recipe.title}/>
          <button onClick={handleGoToRecipe}>Go to Recipe</button>
          {/* Display other details of the recipe as needed */}
        </div>
      )}
        {iframeSrc && (
        <iframe 
          src={iframeSrc} 
          width="100%" 
          height="600px" 
          style={{ border: 'none' }} 
          title="Recipe Webpage"
        ></iframe>
        )}
    </div>
  );
};

export default RandomRecipe;
