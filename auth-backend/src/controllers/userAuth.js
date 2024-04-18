const axios = require("axios");
const User = require("../models/user");

const CLIENT_ID = "e10bb98d40d83cb4579b";
const REDIRECT_URI = "http://localhost:8000/handleAuth";
const REDIRECT_URL = "http://localhost:3000/";
const SCOPES = "user";

const signin = async (req, res) => {
  const baseUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}`;
  res.redirect(baseUrl);
};

const handleWebhook = async (req, res) => {
  // const originalUrl = { req };
  const code = req.originalUrl.split("=").pop();

  const response = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      code,
      client_id: CLIENT_ID,
      client_secret: "cf5415ecc6824d6e07dde09cf039b89949b2b7de",
      redirect_uri: REDIRECT_URI,
    }
  );
  const accessToken = response.data.split("=")[1].split("&")[0];
  console.log(accessToken);
  try {
    const [userDataResponse, emailResponse] = await Promise.all([
      axios.get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
      axios.get("https://api.github.com/user/emails", {
        headers: { Authorization: `Bearer ${accessToken}` },
      }),
    ]);

    console.log("User Data:", userDataResponse.data);
    console.log("Emails:", emailResponse.data);

    // Redirect after both requests are successful
    res.redirect(REDIRECT_URL);
  } catch (error) {
    console.error("Error:", error);
    // Handle error or redirect to an error page
  }
};

const handleSignUp = async (req, res) => {
  const { password, email } = req.body;

  if (!password || !email) {
    return res.status(401).json({ error: "Enter correct credentils !!" });
  }

  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(409).json({ error: "User not exists!" });
    }
    return res.status(409).json({ error: "User  exists!" });
  } catch (error) {
    console.log(error, "errrrrr");
  }
};

module.exports = { signin, handleWebhook, handleSignUp };
