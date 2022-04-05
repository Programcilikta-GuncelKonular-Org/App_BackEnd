const express = require("express");
const router = express.Router();
const { bilgiEkle, bilgiDuzenle, Sil } = require("../controllers/BilgilerController");
const Schemas = require("../validations/Bilgiler");
const { ObjectValidation } = require("../middleware/validations");

router.get("/bilgiler", (req, res) => {
  //veri tabanındaki bütün paylaşılan bilgileri dönecek

  console.log("İstek geldi...", req);

  console.log(`Gelen Request ${req}`);
  res.status(200).send({
    data: "link",
    createdTime: "121212",
  });
});

// router.post("/bilgiekle", bilgiEkle); //controller metodu çağıracağız
/**
 * ekstra bir şeye gerek var mı?
 */
router
  .route("/api/bilgiekle")
  .post(ObjectValidation(Schemas.objectValidate), bilgiEkle); //controller metodu çağıracağız

//değişecek
router.route("/api/bilgiduzenle").put(bilgiDuzenle);
//router.route("/api/bilgiduzenle").put(ObjectValidation(Schemas.idValidate), bilgiDuzenle);//id validation ekle unutma
router.route("/api/bilgisil").post(Sil);

//silme
router.post("/bilgisil/id", (req, res) => {
  //veri tabanında bilgi güncellenecek
  console.log("Bilgi silme isteği geldi");
});

/** Test */
router.get("/api/testBilgiler", (req, res) => {
  res.status(200).send(); //??
});

module.exports = router;
