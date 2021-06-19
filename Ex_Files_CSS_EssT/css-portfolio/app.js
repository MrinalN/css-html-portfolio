const express = require("express");
const app = express();
const PORT = 8080;

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/images', express.static(__dirname + 'public/images'))

// Set Views
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  res.render("portfolio_index");
  // res.send("<html><body>Hello <b>World</b></body></html>\n");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});