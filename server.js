const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.post("/", async (req, res) => {
  const { url } = req.body;
  const response = await fetch(url, {
    headers: {
      Authorization: "Basic em11anRhYmE5NkBnbWFpbC5jb206WmVuZGVzazEyMw==",
    },
  });
  const data = await response.json();
  res.send(data);
});

app.listen(port, () => console.log(`Server running on ${port}!`));
