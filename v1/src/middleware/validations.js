const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const logger = require("../scripts/logger/bilgilerLogger");
const {
  refreshTokenList,
  tokenleriOlustur,
} = require("../services/KullaniciService.js");

const GirisYapildiMi = () => (req, res, next) => {
  const authHeader = req.header("Authorization") || "";

  // console.log(!authHeader);

  if(authHeader == ""){
    res.status(401).send({ hataMesaji: "Kullanıcı sisteme giriş yapamamış." });
  }

  // console.log("authHeader - ", authHeader);

  const accessToken = authHeader.split(" ")[1];
  const refreshToken = authHeader.split(" ")[2]; // ????

  if (!accessToken) {
    res.status(401).send({ hataMesaji: "Kullanıcı sisteme giriş yapamamış." });
  }

  jwt.verify(refreshToken, process.env.REFRESHTOKENSECRET, (err, kullanici) => {
    if (!err && refreshTokenList.includes(refreshToken)) {
      const { accessToken, refreshToken } = tokenleriOlustur(kullanici);

      // kullanici.accessToken = accessToken;
      // kullanici.refreshToken = refreshToken;

      const resKullanici = {
        kAdi: kullanici.kAdi,
        access: accessToken,
        refresh: refreshToken,
      };

      res.kullanici = resKullanici;

      // console.log("Yeni tokenler - ", kullanici);

      next();
    } else {
      res.status(401).send({
        hataMesajı:
          "Kullanıcı sisteme giriş ypamamış ya da uzn süre işlem yapmamış.",
      });
    }
  });
};

const ObjectValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    logger.error("ObjectValidation hatası - ", error);
    res
      .status(httpStatus.BAD_REQUEST)
      .json({ hataMesaji: "Verilerde eksik ya da uygunsuzluk var." }); //[object Object] dönmesine bak

    return;
  }

  Object.assign(req, value);

  /**
   * başarılı validasyon loglaması yapılabilir
   */
  return next();
};

const IdValidate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate({ id: req.body.id });

  if (error) {
    logger.error("IdValidate hatası - ", error);

    res
      // .status(httpStatus.BAD_REQUEST)
      .send({
        hataMesaji: "id bulunamıyor.",
        status: httpStatus.BAD_REQUEST,
      });

    return;
  }

  Object.assign(req, value);

  return next();
};

const KullaniciBilgiValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    res.status(httpStatus.BAD_REQUEST).send({
      hataMesaji: "Bilgiler eksik.",
    });

    return;
  }

  Object.assign(req, value);

  next();
};

module.exports = {
  ObjectValidation,
  IdValidate,
  KullaniciBilgiValidation,
  GirisYapildiMi,
};
