require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const sequelize = require("./src/db/index");
const signinRouter = require("./src/routes/routes.js");
const PORT = 8000;

app.use(cors());
// Middleware to parse JSON bodies
app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true }); // Use { alter: true } to automatically update schema without dropping tables
    console.log("Models synced successfully");
  } catch (error) {
    console.error("Error syncing models:", error);
  }
})();

app.use(signinRouter);

app.listen(PORT, () => {
  console.log("listening on ", PORT);
});
app.get("/", (req, res) => {
  res.send("Hi");
});
