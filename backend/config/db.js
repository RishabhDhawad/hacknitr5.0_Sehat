const mongoose = require("mongoose");
require("dotenv").config();
const url1 = process.env.DB_URL;

mongoose.connect(url1, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection
  .on("open", () => {
    console.log("MongoDB connected!");
  })
  .on("error", (error) => {
    console.log("MongoDB connection error: " + error);
  });

module.exports = connection;
