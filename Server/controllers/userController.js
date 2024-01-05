const User = require("../models/userModel");
const mongoose = require("mongoose");

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
  const { name, username, email, bio, profilePicture } = req.body;

  try {
    const user = await User.create({
      name,
      username,
      email,
      bio,
      profilePicture,
    });

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json(error);
    console.error(error);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
