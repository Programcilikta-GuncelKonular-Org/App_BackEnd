
/**
 * test için server.js e taşindı
 */
// const app_port = process.env.APP_PORT || 3002;
// const { BilgilerRoutes } = require("./api-routes");

const express = require("express");
const helmet = require("helmet");
const config = require("./config");
const loaders = require("./loaders");

config();
loaders();

const app = express();

//loader modülü eklenecek

/*
 *helmet paketi uygulamaya eklendi
 bu paketin ne işe yaradığını araştırın
 */

app.use(helmet());
app.use(express.json());

module.exports = app;
