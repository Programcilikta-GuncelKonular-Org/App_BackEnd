const logger = require("../scripts/logger/bilgilerLogger");

const { kullaniciGirisKontrol } = require("../services/KullaniciService");

const kullaniciGiris = (req, res) => {
  kullaniciGirisKontrol(req.body)
    .then((resKullanici) => {
      res.status(200).json({ mesaj: resKullanici });
    })
    .catch((err) => {
      res.status(401).json({ mesaj: err.message });
    });
};

module.exports = {
  kullaniciGiris,
};
