const logger = require("../scripts/logger/bilgilerLogger");

const { kullaniciGirisKontrol } = require("../services/KullaniciService");

const kullaniciGiris = (req, res) => {
  kullaniciGirisKontrol(req.body)
    .then((resKullanici) => {
      // console.log(resKullanici);

      /**
       * kullanıcının login olması eklenebilir
       */
      res.status(200).json({ mesaj: resKullanici });
    })
    .catch((err) => {
      /**
       * kullanıcı hata alınması loglanmalı
       */
      res.status(401).json({ mesaj: err.message });
    });
};

module.exports = {
  kullaniciGiris,
};
