const signin = require("./controllers/signin");

const express = require("express");
const router = express.Router();

router.get("/signin", signin.signin);
router.get("/handleAuth", signin.handleWebhook);

module.exports = router;
