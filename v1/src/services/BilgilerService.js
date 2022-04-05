//mongoose modelindeki nesneyi db ye yazacak

const Bilgi = require("../models/Bilgi")

const insert = (bilgiData) =>{
    const yeniBilgi = new Bilgi(bilgiData);
    return yeniBilgi.save();
}
const Degistir = (DuzenlenenBilgi) => {
    return Bilgi.findByIdAndUpdate(DuzenlenenBilgi.id, DuzenlenenBilgi)
  };
  
  const remove = (silinecekbilgi) => {
    return Bilgi.findByIdAndDelete(silinecekbilgi.id)
  };

module.exports = {
    insert,
    Degistir,
    remove
}