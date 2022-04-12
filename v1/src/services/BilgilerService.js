//mongoose modelindeki nesneyi db ye yazacak

const Bilgi = require("../models/Bilgi");

const insert = (bilgiData) => {
  const yeniBilgi = new Bilgi(bilgiData);
  return yeniBilgi.save();
};
const update = (DuzenlenenBilgi) => {
  const guncelBilgi = {
    bilgiMetni: DuzenlenenBilgi.bilgiMetni,
    yapilanYorumlar: DuzenlenenBilgi.yapilanYorumlar,
    begeniler: DuzenlenenBilgi.begeniler,
  };

  return Bilgi.findByIdAndUpdate(DuzenlenenBilgi.id, guncelBilgi);
};

const remove = (silinecekbilgi) => {
  return Bilgi.findByIdAndDelete(silinecekbilgi.id);
};

const list = () => {
  return Bilgi.find({});
};

module.exports = {
  insert,
  update,
  remove,
  list
};
