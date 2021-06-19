const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("portfolio_index");
  // res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});