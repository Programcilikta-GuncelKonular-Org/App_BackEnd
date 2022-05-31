const app = require("./app.js");
const { BilgilerRoutes } = require("./api-routes");

app.use(BilgilerRoutes);

const logger = require("./scripts/logger/bilgilerLogger");
const app_port = process.env.APP_PORT || 8080;

app.listen(app_port, () => {
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
  logger.info(`${process.env.APP_PORT} portu dinleniyor...`);
});
