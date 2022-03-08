const express = require("express");
const router = express.Router();

router.get("/bilgiler", (req, res) => {

  //veri tabanındaki bütün paylaşılan bilgileri dönecek

  console.log("İstek geldi...", req);

  console.log(`Gelen Request ${req}`);
  res.status(200).send({
    data: "link",
    createdTime: "121212",
  });
});

router.post("/bilgiekle", (req, res) => {

  //veri tabanına yeni bilgi ekleyecek
  console.log("Bilgi ekleme isteği geldi");
  res.status(200).send({
    detay: "Başarı ile eklendi",
  });
});

router.post("/bilgiduzenle/id", (req, res) => {
    
  //veri tabanında bilgi güncellenecek
  console.log("Bilgi düzenleme isteği geldi");
});

module.exports = router;
