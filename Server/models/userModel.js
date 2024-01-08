const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    profileName: {
      type: String,
    },
    bio: String,
    profilePicture: String,
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (
  email,
  password,
  username,
  profileName,
  bio,
  profilePicture
) {
  console.log("email", password);
  // Validation
  if (!email) {
    throw new Error("Email is required!");
  }

  if (!password) {
    throw new Error("Password is required!");
  }

  if (!username) {
    throw new Error("Username is required!");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Invalid Email Address!");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password not strong enough!");
  }

  const emailExists = await this.findOne({ email });

  if (emailExists) {
    throw new Error("Email already exists");
  }

  const usernameExists = await this.findOne({ username });

  if (usernameExists) {
    throw new Error("Username already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    password: hashedPass,
    username,
    profileName: profileName ? profileName : username,
    bio,
    profilePicture,
  });

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
