# Recipes API Website

## Overview
The Recipes API Website is a dynamic culinary platform designed for food enthusiasts. It features a comprehensive collection of recipes, food jokes, and trivia, offering an engaging user experience.

### Features
- **Diverse Recipe Collection**: Explore a wide range of recipes from various cuisines.
- **Random Recipe Discovery**: The `RandomRecipe` component provides new culinary ideas randomly.
- **Pantry-Based Recipe Suggestions**: `PantrySidebar` suggests recipes based on ingredients in your pantry or fridge.
- **Ingredient-Based Recipe Search**: `IngredientsRecipe` enables searching for recipes by specific ingredients.
- **Random Food Joke and Trivia**: Enjoy humorous jokes and interesting facts with `RandomJoke` and `RandomTrivia`.
- **Efficient Pantry Management**: `PantrySidebar` assists in organizing pantry items.
- **Shopping List Management**: `ShoppingList` helps in creating and maintaining grocery lists.
- **Interactive Navigation**: Seamless experience with the `Nav` component.

### Technologies Used
- React
- React Router
- Axios for API requests
- Spoonacular API

## Setup and Installation
1. Clone the repository: `git clone [repository-link]`
2. Install dependencies: `npm install` or `yarn install`
3. Run the application: `npm start` or `yarn start`

## Usage
- Navigate using the `Nav` component.
- Discover and search recipes, manage pantry items, and enjoy food-related jokes and trivia.

## Live Demo
[Visit the live demo here](https://rtrecipes.netlify.app/)

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

### Service Component - `spoonacularApi`
Interacts with the Spoonacular API to fetch recipes, food jokes, and trivia, using Axios for HTTP requests.

