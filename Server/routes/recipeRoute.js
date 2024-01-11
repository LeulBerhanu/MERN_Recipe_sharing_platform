const express = require("express");
const requireAuth = require("../middleware/requireAuth");
const requireProfile = require("../middkware/requireProfile");
const {
  getRecipes,
  getRecipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

const router = express.Router();

router.use(requireAuth);
router.use(requireProfile);

router.get("/", getRecipes);

router.get("/:_id", getRecipe);

router.post("/", createRecipe);

router.patch("/:_id", updateRecipe);

router.delete("/:_id", deleteRecipe);

module.exports = router;
