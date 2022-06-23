const express = require("express");
const app = express();
let cors = require("cors")
const port = process.env.PORT || 3001;

const images = require("./links.json");

let deCORS = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  const src = images[Math.floor(Math.random() * images.length)];
  res.render("index", { inp: src });
});

app.get("/api", cors(deCORS), (req, res) => {
  const src = images[Math.floor(Math.random() * images.length)];
  res.json({ image: src });
});

// Just more comforting for someone who gonna used on web
app.get("/cdn", (req, res) => {
  const src = images[Math.floor(Math.random() * images.length)];
  res.redirect(src);
})

let server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = server
