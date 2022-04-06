const { insert, remove, update } = require("../services/BilgilerService");

const bilgiEkle = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Veriler uygun değil..." });
    });
};
const bilgiDuzenle = (req, res) => {
  update(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Düzeltme yapılamadı. Hata: " + err });
    });
};

const bilgiSil = (req, res) => {
  remove(req.body)
    .then((response) => {
      console.log("bilgiSil controller - ", response);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ resData: "Silinme işlemi Başarısız.Hata : " + err });
    });
};

module.exports = {
  bilgiEkle,
  bilgiDuzenle,
  bilgiSil,
};
