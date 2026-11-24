import axios from "axios";

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;

const BASE_URL = "https://api.spoonacular.com/recipes";

/**
 * Fetch random recipes
 */
export const getRandomRecipes = async (count = 12) => {
  const response = await axios.get(`${BASE_URL}/random`, {
    params: {
      apiKey: API_KEY,
      number: count,
    },
  });

  return response.data.recipes;
};

/**
 * Search recipes
 */
export const searchRecipes = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/complexSearch`, {
    params: {
      apiKey: API_KEY,
      query,
      number: 12,
      addRecipeInformation: true,
    },
  });

  return response.data.results;
};

/**
 * Get recipe details
 */
export const getRecipeDetails = async (id: number) => {
  const response = await axios.get(`${BASE_URL}/${id}/information`, {
    params: {
      apiKey: API_KEY,
    },
  });

  return response.data;
};