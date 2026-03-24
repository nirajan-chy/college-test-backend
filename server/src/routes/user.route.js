const { Router } = require("express");

const registerUser = require("../controller/user.controller");

const router = Router();

router.post("/register", registerUser);

module.exports = router;
