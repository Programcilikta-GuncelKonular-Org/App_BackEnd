const { insert,remove,Degistir } = require("../services/BilgilerService");


const bilgiEkle = (req, res) => {
  //gidecek Bilgi servisinden ekleme metodu tetikleyecek
  console.log(req.body);
  insert(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Veriler uygun değil..." });
    });
};
const bilgiDuzenle = (req, res) => {
  Degistir(req.body)
    .then((response) => {
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Düzeltme yapılamadı. Hata: " + err });
    });
};

const Sil = (req, res) => {
  //gidecek Bilgi servisinden ekleme metodu tetikleyecek
  remove(req.body)
    .then((response) => {
      console.log(response);
      res.status(200).send({ resData: response });
    })
    .catch((err) => {
      res.status(500).send({ resData: "Silinme işlemi Başarısız.Hata : " + err });
    });
};

module.exports = {
  bilgiEkle,
  bilgiDuzenle,
  Sil
};
