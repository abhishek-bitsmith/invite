const { shortcodeSchema } = require("./schema");
const mongoose = require('mongoose')

const shortcodeModel = new mongoose.model("ShortLink3",shortcodeSchema);

module.exports = { shortcodeModel };
