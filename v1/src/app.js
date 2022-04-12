
const express = require("express");
const helmet = require("helmet"); //npm paketi
const config = require("./config");
const loaders = require("./loaders");

config();
loaders();

const app = express();

app.use(helmet());
app.use(express.json());

module.exports = app;
