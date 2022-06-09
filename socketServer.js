const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:8081",
  },
});

const logger = require("./v1/src/scripts/logger/bilgilerLogger");
const app_port = 8090;

server.listen(app_port, () => {
  console.log(`${app_port} portu socket ile dinleniyor...`);
  logger.info(`${app_port} portu dinleniyor...`);
});

io.on("connection", (socket) => {
  console.log("bağlantı sağlandı");

  socket.on("girisYapanKullanici", ({ kAdi }) => {
    console.log("client mesaj -", kAdi);
    io.emit("girisYapanKullaniciCevap", `Merhaba ${kAdi}`);
  });
});
