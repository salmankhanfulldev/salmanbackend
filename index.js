require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello World! about page");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login Page Welcomed</h1>");
});

app.get("/register", (req, res) => {
  res.send("<h1>Register Page Welcomed</h1>");
});


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
