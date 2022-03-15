/**
 * node.js modülerite
 * 
*/

const express = require("express");
const helmet = require("helmet");
const { BilgilerRoutes } = require("./api-routes");
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

app.listen(process.env.APP_PORT, () => {
    //3002 portundan gelen istekler
    console.log(`${process.env.APP_PORT} portu dinleniyor...`);

    app.use(BilgilerRoutes);
})
