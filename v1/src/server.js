const app = require("./app");
const { BilgilerRoutes } = require("./api-routes");
const app_port = process.env.APP_PORT || 3002;

app.use(BilgilerRoutes);

app.listen(app_port, () => {
    //3002 portundan gelen istekler
    console.log(`${process.env.APP_PORT} portu dinleniyor...`);

})