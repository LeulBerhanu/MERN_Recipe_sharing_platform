const UserProfile = require("../models/userProfileModel");

const requireProfile = async (req, res, next) => {
  const user_id = req.user._id;

  try {
    const profileExists = await UserProfile.findOne({ user: user_id });

    if (!profileExists) {
      return res.status(401).json({ message: "User has no profile" });
    }

    req.profile = await UserProfile.findOne({ user: user_id }).select("_id");
    console.log(req.profile);

    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = requireProfile;
