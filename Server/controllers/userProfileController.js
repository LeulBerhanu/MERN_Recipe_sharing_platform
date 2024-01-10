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
  const { profileId } = req.params;
  console.log(profileId);

  try {
    if (!mongoose.isValidObjectId(profileId)) {
      return res.status(400).json({ message: "Invalid profile ID!" });
    }

    const profile = await UserProfile.findById({ _id: profileId });

    res.status(200).json(profile);
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

module.exports = { createUserProfile, getUserProfile, updateUserProfile };
