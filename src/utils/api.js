// Centralized API functions for the Recipe App
// Example usage: import { fetchRecipes } from './api';
import axios from 'axios';

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(
      'https://api.spoonacular.com/recipes/complexSearch',
      {
        params: {
          query,
          apiKey: 'YOUR_API_KEY', // Replace with your actual API key
        },
      }
    );
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
