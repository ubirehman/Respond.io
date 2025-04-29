const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(
  cors({
    origin: "*",
    methods: "*",
    allowedHeaders: "*",
  })
);

module.exports = app;