const {
  getUser,
  getUsers,
  createUser,
} = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/", createUser);

module.exports = router;
