const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const nanoid = require('nanoid');

const shortcodeSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["app", "post", "profile", "community", "campus"],
    required: true,
    default: "post"
  },
  userId: {
    type: String,
    required: true,
  },
  shortcode: {
    type: String,
    unique: true,
    default: uuidv4().toString()
  },
});
console.log(nanoid.generate)

module.exports = { shortcodeSchema };
