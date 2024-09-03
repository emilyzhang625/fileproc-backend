const processText = require("./modules/processText");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.text());

let processed = { freq: {}, comm: {}, sent: "" };

app.get("/", (req, res) => {
  res.json(processed);
});

app.post("/", (req, res) => {
  const text = req.body;
  console.log(text);
  const result = processText(text);
  processed = {
    freq: result.wordFreq,
    comm: result.mostCommon,
    sent: result.sent,
  };
  res.json(processed);
});

app.delete("/", (req, res) => {
  processed = { freq: {}, comm: {}, sent: "" };
  res.json(processed);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
