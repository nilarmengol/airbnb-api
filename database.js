const mongoose = require("mongoose");

let database = mongoose.connect(
  process.env.VARIABLE_NAME,
  {userNewUrlParser: true},
  err => {
    err ? console.log(err) : console.log("Connected to MongoDB");
  }
);

module.export = database;

("mongodb://localhost:27017/airbnb");
