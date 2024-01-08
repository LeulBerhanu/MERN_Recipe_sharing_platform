const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/recipe", recipeRoute);

mongoose.connect(process.env.MONGOURL).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
