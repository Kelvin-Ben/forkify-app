
// const recipeContainer = document.querySelector(".recipe");
import "core-js/stable";
import * as modal from './model.js'
import "regenerator-runtime/runtime";
import recipeview from './views/recipeView.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    // Listening to loading and hashchange event
    const id = window.location.hash.slice(1);
    if (!id) return;

    // render spinner
    recipeview.renderSpinner();

    // loading the data
    await modal.loadRecipe(id)  // a promise

    // rendering recipe
    recipeview.render(modal.state.recipe)

  } catch (error) {
    alert(error);
  }
};
const events = ["hashchange", "load"];

events.forEach((event) => {
  window.addEventListener(event, controlRecipe);
});
