//buraya yazılacak metodlar ile kontrol sağlanacak

const httpStatus = require("http-status");
// const { schema } = require("../models/Bilgi");
const logger = require("../scripts/logger/bilgilerLogger");

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
   * başarılı validasyon loglamasu yapılabilir
   */
  return next();
};

const IdValidate = (schema) => (req, res, next) => {
  const { value, error } = schema.validate({ id: req.body.id });

  if (error) {
    logger.error("IdValidate hatası - ", error);

    /**
     *  BURADA SIKINTI VAR !!
     
    const hataMesajiStr = error.details
      ?.map((detay) => error.details)
      .join(", ");
    */
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
};
