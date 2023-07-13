import { async } from "regenerator-runtime";

export const state = {
  recipe: {}
};

export const loadRecipe = async function(id) {
  const res = await fetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  );
  const data = await res.json();

  if (!res.ok) throw new Error(`${data.message} (${res.status})`);
  console.log(res, data);

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
}