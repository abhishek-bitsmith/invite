const mongoose = require("mongoose");
const DB_URL =
  process.env.DB_URL ||
  "mongodb+srv://bitsmith-redirector:Ii9xNglxXAyUCG78@cluster0.joppzo0.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
  return await mongoose
    .connect(DB_URL)
    .then(() => {
      console.log("Connected to mongoDb lets go");
    })
    .catch((error) => {
      console.log("Something Went Wrong while connecting to the databse");
    });
};

module.exports = connect;
