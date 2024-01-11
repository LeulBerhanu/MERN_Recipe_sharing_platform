const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  createUserProfile,
  updateUserProfile,
  getUserProfile,
} = require("../controllers/userProfileController");

const router = express.Router();

router.use(requireAuth);

router.get("/:_id", getUserProfile);

router.post("/", createUserProfile);

router.patch("/:_id", updateUserProfile);

module.exports = router;
