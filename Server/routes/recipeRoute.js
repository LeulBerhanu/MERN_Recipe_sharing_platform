const express = require("express");
const {
  getRecipes,
  getRecipe,
  createRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.post("/", createRecipe);

module.exports = router;
