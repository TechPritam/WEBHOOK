const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 8000;
const signinRouter = require("./src/routes.js");
app.use(cors());
app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use(signinRouter);
