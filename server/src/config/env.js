const { config } = require("dotenv");

config();

const MONGO = process.env.MONGO_URI;
const port = process.env.PORT || 5000;

module.exports = {
  MONGO,
  port,
};
