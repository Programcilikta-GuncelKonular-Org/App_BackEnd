const app = require("./app");
const { BilgilerRoutes } = require("./api-routes");
const logger = require("./scripts/logger/bilgilerLogger");
const app_port = process.env.APP_PORT || 3002;
// const cors = require("cors");

app.use(BilgilerRoutes);

app.listen(app_port, () => {
  //3002 portundan gelen istekler
  console.log(`${process.env.APP_PORT} portu dinleniyor...`);
  logger.info(`${process.env.APP_PORT} portu dinleniyor...`);
});
