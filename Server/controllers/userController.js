require("dotenv").config();

const User = require("../models/userModel");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  const user = {
    _id,
  };

  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (!users) return res.status(404).json({ error: "Users not found!" });

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) return res.status(404).json({ error: "User not found!" });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createUser = async (req, res) => {
  const { email, password, username, profileName, bio, profilePicture } =
    req.body;

  try {
    const user = await User.signup(
      email,
      password,
      username,
      profileName,
      bio,
      profilePicture
    );

    // create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
