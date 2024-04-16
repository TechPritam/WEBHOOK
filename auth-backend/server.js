const express = require("express");
const app = express();
const PORT = 8000;
const signinRouter = require("./src/routes.js");
app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
app.get("/", (req, res) => {
  res.send("Hi");
});
app.use(signinRouter);
