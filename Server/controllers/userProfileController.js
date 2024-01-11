const mongoose = require("mongoose");
const UserProfile = require("../models/userProfileModel");

const createUserProfile = async (req, res) => {
  const { username, firstName, lastName, displayName, bio, avatar } = req.body;

  try {
    const user_id = req.user._id;

    const userProfile = await UserProfile.create({
      user: user_id,
      firstName,
      lastName,
      username,
      displayName,
      bio,
      avatar,
    });

    res.status(201).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);

  if (!mongoose.isValidObjectId(_id)) {
    return res.status(400).json({ message: "Invalid ID" });
  }
  try {
    const profile = await UserProfile.findById({ _id });

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  const { _id } = req.params;
  const user_id = req.user._id;

  const updateFields = req.body;

  if (Object.keys(req.body).length === 0) {
    return res.status(204).json({ message: "No update performed!" });
  }

  try {
    if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ message: "Invalid Id!" });
    }

    let userProfile = await UserProfile.findById({ _id });

    if (user_id.toString() !== userProfile.user.toString()) {
      return res
        .status(401)
        .json({ message: "User isn't authorized to update this profile." });
    }

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found!" });
    }

    const updated = await UserProfile.findOneAndUpdate(
      { user: user_id },
      updateFields,
      { new: true }
    );

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createUserProfile, getUserProfile, updateUserProfile };
