/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
const SAUCE_AMOUNT_PER_LAYER = 0.2;
const NOODLES_WEIGHT_PER_LAYER = 50;

export function cookingStatus(remainingTime) {
  if (remainingTime === undefined) {
    return 'You forgot to set the timer.';
  } else if (remainingTime === 0) {
    return 'Lasagna is done.';
  }
  
  return 'Not done, please wait.';
}

export function preparationTime(layers, averagePreparationTime = 2) {
  return layers.length * averagePreparationTime;
}

export function quantities(layers) {
  const amounts = {
    noodles: 0,
    sauce: 0,
  };

  for (let layer of layers) {
    if (layer === 'sauce') {
      amounts[layer] += SAUCE_AMOUNT_PER_LAYER;
    }

    if (layer === 'noodles') {
      amounts[layer] += NOODLES_WEIGHT_PER_LAYER;
    }
  }

  return amounts;
}

export function addSecretIngredient(friendsRecipe, ownRecipe) {
  const secretIngredient = friendsRecipe.at(-1);

  ownRecipe.push(secretIngredient);
}

export function scaleRecipe(recipe, numberOfPortions) {
  const scaledRecipe = {};
  const portionOffset = numberOfPortions / 2;
  
  for (const ingredient in recipe) {
    scaledRecipe[ingredient] = recipe[ingredient] * portionOffset;
  }

  return scaledRecipe;
}