const { insert } = require("../services/BilgilerService");

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

module.exports = {
  bilgiEkle,
};
