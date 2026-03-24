const mongoose = require("mongoose");
const { MONGO } = require("./env");

const connectMongo = async (req, res) => {
  try {
    await mongoose.connect(MONGO);
    console.log("Mongoose connect successfully");
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = connectMongo;
