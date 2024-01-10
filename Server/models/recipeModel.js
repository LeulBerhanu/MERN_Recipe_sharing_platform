const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ratingSchema = new Schema(
  {
    userProfile: {
      type: Schema.Types.ObjectId,
      ref: "UserProfile",
    },
    value: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

const reviewSchema = new Schema(
  {
    userProfile: {
      type: Schema.Types.ObjectId,
      ref: "UserProfile",
    },
    comment: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const recipeSchema = new Schema(
  {
    userProfile: {
      type: Schema.Types.ObjectId,
      ref: "UserProfile",
    },
    title: {
      type: String,
      required: true,
    },
    description: String,
    ingredients: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        measurment: {
          type: String,
          required: true,
        },
      },
    ],
    steps: [
      {
        description: {
          type: String,
          required: true,
        },
      },
    ],
    imageUrl: String,

    cookingTime: {
      time: {
        type: Number,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    ratings: [ratingSchema],
    reviews: [reviewSchema],
  },
  { timestamps: true }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
