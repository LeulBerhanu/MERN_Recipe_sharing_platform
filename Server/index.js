require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});

app.post("/recipe", (req, res) => {
  req.body.name;
});

mongoose.connect(process.env.MONGOURL).then(() => {
  app.listen(3000, () => {
    console.log("listening");
  });
});
