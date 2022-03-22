//buraya yazılacak metodlar ile kontrol sağlanacak

const httpStatus = require("http-status");

const ObjectValidation = (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);

  if (error) {
    console.log(error);
    const hataMesajiStr = error.details
      ?.map((detay) => error.details)
      .join(", ");

    /**
     * loglama yapılmalı
     */

    console.log(`Veri hatalı! -  ${hataMesajiStr}`);
    res.status(httpStatus.BAD_REQUEST).json({ hataMesaji: "Veriler uygun değil" });//[object Object] dönmesine bak

    return;
  }

  Object.assign(req, value);

  /**
   * başarılı validasyon loglamasu yapılabilir
   */
  return next();
};

module.exports = {
  ObjectValidation,
};
