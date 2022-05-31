const express = require("express");
const router = express.Router();
const {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
  bilgileriAl,
} = require("../controllers/BilgilerController");
const { kullaniciGiris } = require("../controllers/KullaniciController");
const Schemas = require("../validations/Bilgiler");
const {
  ObjectValidation,
  IdValidate,
  KullaniciBilgiValidation,
  GirisYapildiMi
} = require("../middleware/validations");

/** Bütün paylaşımları alma */
router.route(process.env.GET_LISTELE).get(GirisYapildiMi(), bilgileriAl);

/** Paylaşım ekleme */
router
  .route(process.env.POST_EKLE)
  .post(GirisYapildiMi(), ObjectValidation(Schemas.objectValidate), bilgiEkle);

/** Paylaşım düzenleme */
router.route(process.env.PUT_DUZENLE).put(
  IdValidate(Schemas.idValidate),
  GirisYapildiMi(),
  bilgiDuzenle
);

/** Paylaşım silme */
router.route(process.env.DELETE_SIL).delete(GirisYapildiMi(), bilgiSil);

/** Giriş yapma */
router
  .route(process.env.POST_GIRIS)
  .post(
    KullaniciBilgiValidation(Schemas.kullaniciBilgiValidate),
    kullaniciGiris
  );

/**
 * Test end point leri */
router.get(process.env.GET_TEST, (req, res) => {
  res.status(200).send(); //??
});

module.exports = router;
