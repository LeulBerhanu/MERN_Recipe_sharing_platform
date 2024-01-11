const {
  getUser,
  getUsers,
  createUser,
  loginUser,
} = require("../controllers/userController");

const express = require("express");

const router = express.Router();

router.get("/", getUsers);

router.get("/:id", getUser);

router.post("/signup", createUser);

router.post("/login", loginUser);

module.exports = router;
