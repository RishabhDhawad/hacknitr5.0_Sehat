const mongoose = require("mongoose");
const db = require("../config/db");

const { Schema } = mongoose;

const userSchema = new Schema({
  phone: {
    type: String,
    lowercase: true,
    require: true,
    unique: true,
  },
  hashk: {
    type: String,
  },
  name: {
    type: String,
    require: false,
  },
  profilePic: {
    type: String,
  },
  city: {
    type: String,
    require: false,
  },
  mail: {
    type: String,
  },

  gen_data: {
    height: Number,
    weight: Number,
    age: Number,
    bp: Number,
    sugar: Number,
  },
  reports: [
    {
      title: String,
      fileURL: String,
      date: String,
      symptoms: String,
    },
  ],
});

const UserModel = db.model("user", userSchema);
module.exports = UserModel;
