//buraya yazılacak metodlar ile kontrol sağlanacak

const httpStatus = require("http-status");

const ObjectValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    /**
     *  BURADA SIKINTI VAR !!
    console.log(error);
    const hataMesajiStr = error.details
      ?.map((detay) => error.details)
      .join(", ");
    */

    /**
     * loglama yapılmalı
     */

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
    console.log("validations err - \n", error);

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

module.exports = {
  ObjectValidation,
  IdValidate,
};
