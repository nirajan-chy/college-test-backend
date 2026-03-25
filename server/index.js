const express = require("express");
const mongoose = require("mongoose");
const connectMongo = require("./src/config/mongodb");
const { port } = require("./src/config/env");
const router = require("./src/routes/user.route");

const app = express();
app.use(express.json());
connectMongo();
app.use("/user", router);

app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
