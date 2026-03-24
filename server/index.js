const express = require("express");
const mongoose = require("mongoose");

const { MONGO, port } = require("./src/config/env");
const userRoutes = require("./src/routes/user.route");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/users", userRoutes);

const startServer = async () => {
  try {
    if (!MONGO) {
      throw new Error("Missing MONGO_URI environment variable");
    }

    await mongoose.connect(MONGO);
    console.log("Connected to MongoDB");

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
