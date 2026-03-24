const User = require("../models/user.model");

// Handle user registration
const registerUser = async (req, res, next) => {
  try {
    const { email, username, password, firstName, lastName } = req.body || {};

    if (!email || !username || !password) {
      return res.status(400).json({
        message: "Email, username, and password are required",
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { username }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "Email or username already in use",
      });
    }

    const user = await User.create({
      email,
      username,
      password,
      firstName,
      lastName,
    });

    const responsePayload = {
      id: user._id,
      email: user.email,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      isVerified: user.isVerified,
      createdAt: user.createdAt,
    };

    return res.status(201).json({
      message: "User registered successfully",
      user: responsePayload,
    });
  } catch (error) {
    if (next) {
      return next(error);
    }

    return res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  registerUser,
};
