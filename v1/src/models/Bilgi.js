const mongoose = require("mongoose");
const { stringify } = require("nodemon/lib/utils");

const BilgiSchema = new mongoose.Schema({
  bilgiMetni: { type: String, required: true },
  yapilanYorumlar: { type: Array },
  begeniler: { type: Array },
});

BilgiSchema.post("save", (doc) => {
    console.log("Kaydedilen doküman - ", doc);
});
