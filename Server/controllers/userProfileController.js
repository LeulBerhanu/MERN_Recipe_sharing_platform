const mongoose = require("mongoose");
const UserProfile = require("../models/userProfileModel");

const createUserProfile = async (req, res) => {
  const { username, firstName, lastName, displayName, bio, avatar } = req.body;

  try {
    const user_id = req.user._id;

    const existingProfile = await UserProfile.findOne({ user: user_id });

    if (existingProfile) {
      return res.status(400).json({ message: "User already has a profile." });
    }

    const userProfile = await UserProfile.create({
      user: user_id,
      firstName,
      lastName,
      username,
      displayName,
      bio,
      avatar,
    });

    res.status(200).json(userProfile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  const { profileId } = req.params;
  const user_id = req.user._id;
  const updateFields = req.body;

  try {
    if (!mongoose.isValidObjectId(profileId)) {
      return res.status(400).json({ message: "Invalid profile ID!" });
    }

    let userProfile = await UserProfile.findById({ _id: profileId });
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

module.exports = { createUserProfile, updateUserProfile };
