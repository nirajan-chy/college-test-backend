const User = require("../models/user.model");
// Handle user registration
const registerUser = async (req, res, next) => {
  try {
    const { fullname, email, password } = req.body;
    const isExist = await User.findOne({ email });
    if (isExist)
      return res.json({
        message: "user already exist",
      });
    const user = await User.create({
      fullname,
      email,
      password,
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
module.exports = registerUser;
