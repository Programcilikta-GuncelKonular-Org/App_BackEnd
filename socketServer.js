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

let adminId = "";

io.on("connection", (socket) => {
  // const { user } = socket.handshake.query;
  // console.log("bağlantı sağlandı");

  socket.on("kullaniciGirisi", ({ data }) => {
    if (adminId != "") {
      io.to(adminId).emit("girisYapanKullanici", {
        data: { kAdi: data.kAdi, sId: socket.id },
      });
    }
  });

  socket.on("adminGirisi", () => {
    // console.log("adminGirisi - ", socket.id);
    adminId = socket.id;
  });
  
  socket.on("disconnecting", () => {
    // console.log("bağlantı kesildi - ", socket.id);
    if (adminId != "") {
      io.to(adminId).emit("cikisYapanKullanici", {
        data: { sId: socket.id },
      });
    }
  });
});
