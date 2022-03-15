//mongoose modelindeki nesneyi db ye yazacak

const Bilgi = require("../models/Bilgi")

const insert = (bilgiData) =>{
    const yeniBilgi = new Bilgi(bilgiData);
    return yeniBilgi.save();
}

module.exports = {
    insert,
}