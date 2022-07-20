//this always needs to be at the top
require("dotenv").config();

//instead of putting const in front of everything you can add a comma after and it will know to do a const on every line.
const express = require("express"),
  cors = require("cors"),
  mongoose = require("mongoose"),
  app = express(),
  PORT = process.env.PORT || 4000,
  HOST = process.env.HOST || "127.0.0.1";
  db = require("./db");

app.use(cors())
app.use(express.json())


app.listen(PORT, HOST, () => {
  try {
    console.log(`server running on:${HOST}:${PORT}`);
  } catch (err) {
    console.log(`server error: ${err}`);
  }
});
