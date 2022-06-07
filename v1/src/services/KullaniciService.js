const Kullanici = require("../models/Kullanici");
var jwt = require("jsonwebtoken");

let refreshTokenList = [];

const kullaniciGirisKontrol = async (kulllaniciBilgi) => {
  const dbKullanici = await Kullanici.find({ kAdi: kulllaniciBilgi.kAdi }); //findOne gibi bir şey varsa değişecek!!!

  if (dbKullanici.length == 0) throw Error("Kullanıcı bulunamadı...");

  if (dbKullanici[0].sifre != kulllaniciBilgi.sifre)
    throw Error("Şifre hatalı...");

  const kullanici = dbKullanici[0];
  const yeniTokens = tokenleriOlustur(kullanici);
  
  let girisYapanKullanici = {
    kAdi: kullanici.kAdi,
    rol: kullanici.rol,
    // sifre: kullanici.sifre,
    tokens: {
      access: yeniTokens.accessToken,
      refresh: yeniTokens.refreshToken,
    },
  };

  return girisYapanKullanici;
};

const tokenleriOlustur = (kullanici) => {
  const accessToken = jwt.sign(
    { kAdi: kullanici.kAdi },
    process.env.ACCESSTOKENSECRET,
    { expiresIn: "15s" }
  );

  const refreshToken = jwt.sign(
    { kAdi: kullanici.kAdi },
    process.env.REFRESHTOKENSECRET,
    { expiresIn: "15m" }
  );

  refreshTokenList.push(refreshToken);
  return { accessToken, refreshToken };
};

module.exports = {
  kullaniciGirisKontrol,
  tokenleriOlustur,
  refreshTokenList,
};
