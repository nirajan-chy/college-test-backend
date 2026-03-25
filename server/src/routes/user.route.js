const { Router } = require("express");

const { registerUser, getUser } = require("../controller/user.controller");

const router = Router();

router.post("/register", registerUser);
router.get("/get", getUser);

module.exports = router;
