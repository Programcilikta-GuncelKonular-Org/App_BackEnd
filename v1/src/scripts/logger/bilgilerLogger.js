const winston = require("winston");
const { json, combine, timestamp } = winston.format;

const errorFilter = winston.format((info, opts) => {
  return info.level === "error" ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === "info" ? info : false;
});

const logger = winston.createLogger({
  level: "info",
  format: combine(timestamp(), json()),
  // defaultMeta: { service: "bilgiler-service" }, //bu property araştır
  transports: [
    new winston.transports.File({
      filename: "v1/src/logs/errors.log",
      level: "error",
      format: errorFilter(),
    }),
    new winston.transports.File({
      filename: "v1/src/logs/info.log",
      level: "info",
      format: infoFilter(),
    }),
    new winston.transports.File({ filename: "v1/src/logs/allLogs.log" }),
  ],
});

module.exports = logger;
