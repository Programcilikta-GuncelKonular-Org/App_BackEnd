const mongoose = require("mongoose");

const BilgiSchema = new mongoose.Schema(
  {
    bilgiMetni: { type: String, required: true },
    yapilanYorumlar: { type: Array },
    begeniler: { type: Array },
  },
  {
    collection: "PaylasilanBilgiler",
    timestamps: true,
    versionKey: false,
  }
);

BilgiSchema.post("save", (doc) => {
  console.log("Bilgi model: Kaydedilen doküman - \n", doc);
});

BilgiSchema.post("updateOne", (doc) => {
  console.log("Bilgi model: Düzenlenen doküman - ", doc);
  // return doc;
});

module.exports = mongoose.model("BilgiSchema", BilgiSchema);