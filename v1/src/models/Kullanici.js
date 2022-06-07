const mongoose = require("mongoose");
const logger = require("../scripts/logger/bilgilerLogger");

const KullaniciSchema = new mongoose.Schema(
    {
      kAdi: { type: String, required: true },
      sifre: { type: String, required: true },
      rol: { type: Boolean, required: true }, //true-admin false-normal kullanıcı
    },
    {
      collection: "Kullanicilar",
      timestamps: true,
      versionKey: false,
    }
  );
  
  /**
   * bu kısım üzerinden geçilmeli
   */
  
   KullaniciSchema.post("save", (doc) => {
    logger.info("Kaydedilen doküman - ", doc);
  });
  
  KullaniciSchema.post("findOneAndUpdate", (doc) => {
    logger.info("Güncellenen doküman - ", doc);
  });
  
  module.exports = mongoose.model("KullaniciSchema", KullaniciSchema);