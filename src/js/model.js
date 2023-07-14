import { async } from "regenerator-runtime";
import { API_URL } from "./config";
import { getJSON } from "./helpers";
export const state = {
  recipe: {}
};

export const loadRecipe = async function(id) {
  try {
    const data = await getJSON(`${API_URL}/${id}`)
    const { recipe } = data.data;
    
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      Ingredient: recipe.ingredients,
      Publisher: recipe.publisher,
      Serving: recipe.servings,
      sourceUrl: recipe.source_url,
    };
    console.log(recipe);
  } catch (err) {
    throw err
  }
}