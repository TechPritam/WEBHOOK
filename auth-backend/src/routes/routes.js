const userAuth = require("../controllers/userAuth");

const express = require("express");
const router = express.Router();

router.get("/signin", userAuth.signin);
router.get("/handleAuth", userAuth.handleWebhook);
router.post("/user", userAuth.handleSignUp);

module.exports = router;
