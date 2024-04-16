const signin = require("./controllers/signin");

const express = require("express");
const router = express.Router();

router.get("/signin", signin);

module.exports = router;
