const express = require("express");



const { register, login } = require("../controllers/auth");
// const { forgotpassword } = require("../controllers/forgotpassword");
// const { resetPassword } = require("../controllers/resetpassword");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// router.post("/forgotPassword", forgotpassword);
// router.post("/resetpassword", resetPassword);

module.exports = router;
