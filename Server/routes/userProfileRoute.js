const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  createUserProfile,
  updateUserProfile,
  getUserProfile,
} = require("../controllers/userProfileController");

const router = express.Router();

router.use(requireAuth);

router.get("/:profileId", getUserProfile);

router.post("/", createUserProfile);

router.patch("/:profileId", updateUserProfile);

module.exports = router;
