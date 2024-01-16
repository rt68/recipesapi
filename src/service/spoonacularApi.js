import axios from 'axios';

const API_BASE_URL = 'https://api.spoonacular.com';
const API_KEY = '3ab238d96a00443f9ffc949e82c6a1fd';

const spoonacularApi = {
   /**
    * @param {string} ingredients - A list of ingredients (comma-separated).
   * @returns {Promise<Object>} 
   */
   getRecipesByIngredients: function (ingredients) {
    const endpoint = `${API_BASE_URL}/recipes/findByIngredients`;
    const params = {
      ingredients,
      apiKey: API_KEY,
      number: 10, // Number of results to return 
      
    };
    return axios.get(endpoint, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching recipes from Spoonacular:', error);
      throw error;
    });
},


  /**
     * @returns {Promise<Object>} 
   */
  getRandomRecipe: function () {
    const endpoint = `${API_BASE_URL}/recipes/random`;
    const params = {
      apiKey: API_KEY,
      number: 1 
    };

    return axios.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching a random recipe from Spoonacular:', error);
        throw error;
      });
  },
   /**
   * @returns {Promise<Object>} 
   */
   getRandomFoodJoke: function () {
    const endpoint = `${API_BASE_URL}/food/jokes/random`;
    const params = {
      apiKey: API_KEY
    };

    return axios.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching a random food joke from Spoonacular:', error);
        throw error;
      });
  },
   /**
   * @returns {Promise<Object>} 
   */
   getRandomFoodTrivia: function () {
    const endpoint = `${API_BASE_URL}/food/trivia/random`;
    const params = {
      apiKey: API_KEY
    };

    return axios.get(endpoint, { params })
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching random food trivia from Spoonacular:', error);
        throw error;
      });
  }
};

export default spoonacularApi;
