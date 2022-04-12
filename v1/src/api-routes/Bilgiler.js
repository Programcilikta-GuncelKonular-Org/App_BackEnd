const express = require("express");
const router = express.Router();
const {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
  bilgileriAl
} = require("../controllers/BilgilerController");
const Schemas = require("../validations/Bilgiler");
const { ObjectValidation, IdValidate } = require("../middleware/validations");

/** Bütün paylaşımları alma 
*/
router
  .route("/api/bilgiler")
  .get(bilgileriAl);

/** Paylaşım ekleme */
router
  .route("/api/bilgiekle")
  .post(ObjectValidation(Schemas.objectValidate), bilgiEkle); //controller metodu çağıracağız

/** Paylaşım düzenleme 
 * IdValidate() metoduna Schemas.idValidate parametre olarak vermeyi atlamışız
*/
router.route("/api/bilgiduzenle").put(IdValidate(Schemas.idValidate), bilgiDuzenle);

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
