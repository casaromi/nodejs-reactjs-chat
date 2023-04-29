const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"private-key": "aed3f216-cea7-48f1-b454-77dbb497b4e7"}}
    )
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3001);