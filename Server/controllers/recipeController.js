const Recipe = require("../models/recipeModel");
const User = require("../models/userModel");
const mongoose = require("mongoose");

// get recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({});

    if (recipes.length === 0)
      return res.status(404).json({ error: "No recipes available" });

    res.status(200).json(recipes);
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
    const user_id = req.user._id;

    const recipe = await Recipe.create({
      user: user_id,
      title: title.trim(),
      description: description.trim(),
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
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getRecipes, getRecipe, createRecipe };
