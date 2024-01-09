const express = require("express");
const requireAuth = require("../middleware/requireAuth");

const {
  createUserProfile,
  updateUserProfile,
} = require("../controllers/userProfileController");

const router = express.Router();

router.use(requireAuth);

router.post("/", createUserProfile);

router.patch("/:profileId", updateUserProfile);

module.exports = router;
