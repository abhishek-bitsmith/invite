const validateKey = (req, res, next) => {
  if (req.body.staticKey !== "mykey") {
    return res.status(401).send("Invalid static key");
  }
  next();
};

module.exports = { validateKey };
