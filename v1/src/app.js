/**
 * node.js modülerite
 * 
*/

const express = require("express");
const helmet = require("helmet");
const { BilgilerRoutes } = require("./api-routes");
const config = require("./config");

config();

const app = express();

//loader modülü eklenecek

/*
 *helmet paketi uygulamaya eklendi
 bu paketin ne işe yaradığını araştırın
 */

app.use(helmet());

app.listen(3007, () => {
    //3002 portundan gelen istekler
    console.log(`${process.env.PORT} portu dinleniyor...`);

    app.use(BilgilerRoutes);
})
