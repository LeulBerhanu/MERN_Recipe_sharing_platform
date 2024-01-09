const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userProfileSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    bio: String,
    avatar: String,
  },
  { timestamps: true }
);

const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
