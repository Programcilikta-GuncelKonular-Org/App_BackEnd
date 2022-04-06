const express = require("express");
const router = express.Router();
const {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
} = require("../controllers/BilgilerController");
const Schemas = require("../validations/Bilgiler");
const { ObjectValidation, IdValidate } = require("../middleware/validations");

/** Bütün paylaşımları alma 
 *  EKSİK!!
*/
router.get("/bilgiler", (req, res) => {
  console.log("İstek geldi...", req);

  console.log(`Gelen Request ${req}`);
  res.status(200).send({
    data: "link",
    createdTime: "121212",
  });
});

/** Paylaşım ekleme */
router
  .route("/api/bilgiekle")
  .post(ObjectValidation(Schemas.objectValidate), bilgiEkle); //controller metodu çağıracağız

/** Paylaşım düzenleme */
router.route("/api/bilgiduzenle").put(IdValidate(), bilgiDuzenle);

/** Paylaşım silme */
router.route("/api/bilgisil").delete(bilgiSil);
//router.route("/api/bilgiduzenle").put(ObjectValidation(Schemas.idValidate), bilgiDuzenle);//id validation ekle unutma

/** 
 * Test end point leri 
 * */
router.get("/api/testBilgiler", (req, res) => {
  res.status(200).send(); //??
});

module.exports = router;
