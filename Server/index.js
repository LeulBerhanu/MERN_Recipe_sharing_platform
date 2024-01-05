const userRoute = require("./routes/userRoute");
const recipeRoute = require("./routes/recipeRoute");

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

app.use(express.json());

// Routes
app.use("/api/user", userRoute);
app.use("/api/recipe", recipeRoute);

mongoose.connect(process.env.MONGOURL).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
