require("dotenv").config();
const express = require("express");
const app = express();

const port = 2000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("utkarsha_chak");
});

app.get("/login", (req, res) => {
  res.send("please login");
});

app.get("/learning", (req, res) => {
  res.send("i'm learning backend here");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
