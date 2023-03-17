const { shortcodeModel } = require("../dbConfig/models");
const redirectRouter = require("express").Router();

redirectRouter.get("/:shortcode", async (req, res, next) => {
  try {
    const shortLink = await shortcodeModel.findOne({
      shortcode: req.params.shortcode.toString(),
    });
    if (!shortLink) {
      return res.status(404).send("Shortcode not found");
    }
    console.log(shortLink.shortcode);
    const deepLink = `campus://${shortLink.type}/${shortLink.respectiveId}`;
    res.redirect(deepLink);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error redirecting");
  }
});

module.exports = { redirectRouter };
