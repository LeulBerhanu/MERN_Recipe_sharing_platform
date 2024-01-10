const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const requireProfile = require("../middleware/requireProfile");
const {
  getRecipes,
  getRecipe,
  createRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.use(requireAuth);
router.use(requireProfile);

router.get("/", getRecipes);

router.get("/:id", getRecipe);

router.post("/", createRecipe);

module.exports = router;
