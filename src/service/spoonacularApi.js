import axios from 'axios';

const API_BASE_URL = 'https://api.spoonacular.com';
const API_KEY = '3ab238d96a00443f9ffc949e82c6a1fd'; // Replace with your Spoonacular API key

const spoonacularApi = {
   /**
   * Fetches recipes based on ingredients.
   * @param {string} ingredients - A list of ingredients (comma-separated).
   * @returns {Promise<Object>} - Promise resolving to the response with recipes.
   */
   getRecipesByIngredients: function (ingredients) {
    const endpoint = `${API_BASE_URL}/recipes/findByIngredients`;
    const params = {
      ingredients,
      apiKey: API_KEY,
      number: 10, // Number of results to return (adjust as needed)
      // Add any other parameters you need
    };
    return axios.get(endpoint, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching recipes from Spoonacular:', error);
      throw error;
    });
},


  /**
   * Fetches a random recipe.
   * @returns {Promise<Object>} - Promise resolving to the response with a random recipe.
   */
  getRandomRecipe: function () {
    const endpoint = `${API_BASE_URL}/recipes/random`;
    const params = {
      apiKey: API_KEY,
      number: 1 // Number of random recipes to return
    };

    return axios.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching a random recipe from Spoonacular:', error);
        throw error;
      });
  }
};

export default spoonacularApi;
