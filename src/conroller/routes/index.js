const express = require("express");
const app = express();
cons
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`server lising on port:${port} `);
});
