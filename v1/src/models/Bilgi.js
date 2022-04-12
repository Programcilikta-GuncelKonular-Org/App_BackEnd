const mongoose = require("mongoose");
const logger = require("../scripts/logger/bilgilerLogger");

const BilgiSchema = new mongoose.Schema(
  {
    bilgiMetni: { type: String, required: true },
    yapilanYorumlar: { type: Array },
    begeniler: { type: Array },
    // user_id: { type: mongoose.Types.ObjectId },
  },
  {
    collection: "PaylasilanBilgiler",
    timestamps: true,
    versionKey: false,
  }
);

/**
 * bu kısım üzerinden geçilmeli
 */

BilgiSchema.post("save", (doc) => {
  logger.info("Kaydedilen doküman - ", doc);
});

BilgiSchema.post("findOneAndUpdate", (doc) => {
  logger.info("Güncellenen doküman - ", doc);
});

module.exports = mongoose.model("BilgiSchema", BilgiSchema);
