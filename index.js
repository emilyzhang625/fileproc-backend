const processText = require("./modules/processText");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.text());

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

app.post("/", (req, res) => {
  const text = req.body;
  console.log(text);
  const result = processText(text);
  res.send({
    freq: result.wordFreq,
    comm: result.mostCommon,
    sent: result.sent,
  });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
