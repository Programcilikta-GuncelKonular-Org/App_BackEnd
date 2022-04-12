const logger = require("../scripts/logger/bilgilerLogger");
const { insert, remove, update, list } = require("../services/BilgilerService");

const bilgiEkle = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
      logger.info("Bilgi eklendi. Eklenen bilgi - ", req.body);
    })
    .catch((err) => {
      logger.error("Bilgi ekleme hatası - ", err);
      res.status(500).send({ resData: "Veriler uygun değil..." });
    });
  };
  const bilgiDuzenle = (req, res) => {
    update(req.body)
    .then((response) => {
      logger.info("Bilgi düzenlendi. Yeni bilgi - ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Bilgi düzenleme hatası - ", err);
      res.status(500).send({ resData: "Düzeltme yapılamadı." });
    });
  };
  
  const bilgileriAl = (req, res) => {
    list()
    .then((response) => {
      res.status(200).send({ resData: response });
      logger.info("Bilgiler alındı.");
    })
    .catch((err) => {
      logger.error("Bilgileri alma hatası - ", err);
      res
      .status(500)
      .send({ resData: "Kayıtlar alınamadı." });
    });
  };
  
  const bilgiSil = (req, res) => {
    remove(req.body)
    .then((response) => {
      logger.info("Bilgi silindi. Silinen id - ", req.body);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      logger.error("Bilgi silme hatası - ", err);
      res
        .status(500)
        .send({ resData: "Silinme işlemi Başarısız." });
    });
};

module.exports = {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
  bilgileriAl
};
