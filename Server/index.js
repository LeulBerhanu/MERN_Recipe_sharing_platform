const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");
const profileRoute = require("./routes/userProfileRoute");

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", userRoute);
app.use("/api/profile", profileRoute);
app.use("/api/recipe", recipeRoute);

mongoose.connect(process.env.MONGOURL).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
