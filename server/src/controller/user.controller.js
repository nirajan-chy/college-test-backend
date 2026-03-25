const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.json({
        message: "user already exist",
      });
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      success: true,
      message: "User register successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json({
      success: true,
      message: "message retrieved successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
