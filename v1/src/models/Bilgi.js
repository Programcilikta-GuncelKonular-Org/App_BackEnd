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
  console.log("Kaydedilen doküman - ", doc);
});

module.exports = mongoose.model("BilgiSchema", BilgiSchema);