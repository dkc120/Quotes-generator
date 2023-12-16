const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.get("/", async (req, res) => {
  let response = await fetch(
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
  );
  let data = await response.json();
  res.json(data);
});

app.listen(port, () => {
  console.log("port is listening");
});
