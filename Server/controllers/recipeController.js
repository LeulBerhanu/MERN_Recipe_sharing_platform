const Recipe = require("../models/recipeModel");
const mongoose = require("mongoose");

// get recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});

    if (recipes.length === 0)
      return res.status(404).json({ error: "No recipes available" });

    res.render("index");
    // res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a single recipe
const getRecipe = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "Recipe not found!" });

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ error: "Recipe not found!" });

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create a recipe
const createRecipe = async (req, res) => {
  const {
    title,
    description,
    ingredients,
    steps,
    imageUrl,
    cookingTime,
    difficulty,
    category,
    ratings,
    reviews,
  } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      steps,
      imageUrl,
      cookingTime,
      difficulty,
      category,
      ratings,
      reviews,
    });

    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getRecipes, getRecipe, createRecipe };
