const { shortcodeModel } = require("../dbConfig/models");

const createUrl = require("express").Router();
const { validateKey } = require("../middlewares/validateKey");
const { v4: uuidv4 } = require("uuid");

createUrl.post("/shorten", validateKey, async (req, res, next) => {
  try {
    const { type, userId } = req.body;
    const newid = uuidv4().toString();
    const shortLink = new shortcodeModel({ type, userId, shortcode: newid });
    await shortLink.save();
    res.send(`r.bitsmith.in/${shortLink.shortcode}`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating short link");
  }
});

module.exports = { createUrl };
