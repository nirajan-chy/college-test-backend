const express = require("express");
const mongoose = require("mongoose");
const connectMongo = require("./src/config/mongodb");
const { port } = require("./src/config/env");

const app = express();
app.use(express.json());
connectMongo();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
