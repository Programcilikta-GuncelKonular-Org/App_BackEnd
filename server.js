const app = require("./v1/src/app.js");
const { BilgilerRoutes } = require("./v1/src/api-routes");

app.use(BilgilerRoutes);

const logger = require("./v1/src/scripts/logger/bilgilerLogger");
const app_port = process.env.APP_PORT || 8080;

app.listen(app_port, () => {
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
  logger.info(`${process.env.APP_PORT} portu dinleniyor...`);
});
