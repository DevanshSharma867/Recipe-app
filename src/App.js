import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from 'C:\\Users\\sdeva\\.vscode\\recipe-app\\src\\Components\\SearchBar';
import RecipeList from 'C:\\Users\\sdeva\\.vscode\\recipe-app\\src\\Components\\RecipeList';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (query) => {
    try {
      const response = await axios.get(
        `https://api.spoonacular.com/recipes/complexSearch`,
        {
          params: {
            query: query,
            apiKey: 'cf248e56550643298e80e75820645fb3',
          },
        }
      );
      setRecipes(response.data.results);
    } catch (error) {
      console.error('Error fetching recipes', error);
    }
  };

  return (
    <div className="App">
      <h1>Recipe Search</h1>
      <SearchBar onSearch={getRecipes} />
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default App;
