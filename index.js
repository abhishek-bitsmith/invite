const express = require("express");
const { v4: uuidv4 } = require("uuid");
const { shortcodeModel } = require("./dbConfig/models");
const connect = require("./dbConfig/db");
const app = express();
const port = process.env.PORT || 3000;

// routers
const { createUrl } = require("./routers/create");
const { redirectRouter } = require("./routers/redirect");

connect();

app.use(express.json());

app.use("/", createUrl);
app.use("/", redirectRouter);

app.listen(port, () => {
  console.log(`Server listening on http://r.bitsmith.in:${port}`);
});
