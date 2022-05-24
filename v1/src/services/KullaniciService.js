const Kullanici = require("../models/Kullanici");
var jwt = require("jsonwebtoken");

let refreshTokens = [];

const kullaniciGirisKontrol = async (kulllaniciBilgi) => {
  const dbKullanici = await Kullanici.find({ kAdi: kulllaniciBilgi.kAdi });

  if (dbKullanici.length == 0) throw Error("Kullanıcı bulunamadı...");

  if (dbKullanici[0].sifre != kulllaniciBilgi.sifre)
    throw Error("Şifre hatalı...");

  const yeniTokens = tokenleriOlustur(dbKullanici);

  let girisYapanKullanici = {
    kAdi: dbKullanici[0].kAdi,
    sifre: dbKullanici[0].sifre,
    tokens: {
      access: yeniTokens.accessToken,
      refresh: yeniTokens.refreshToken,
    },
  };

  console.log("kullanıcı servis - ", girisYapanKullanici);
  return girisYapanKullanici;
};

const tokenleriOlustur = (kullanici) => {
  const accessToken = jwt.sign(
    { kAdi: kullanici.kAdi },
    process.env.ACCESSTOKENSECRET,
    { expiresIn: "20s" }
  );

  const refreshToken = jwt.sign(
    { kAdi: kullanici.kAdi },
    process.env.REFRESHTOKENSECRET,
    { expiresIn: "15m" }
  );

  refreshTokens.push(refreshToken);
  return { accessToken, refreshToken };
};

module.exports = {
  kullaniciGirisKontrol,
  tokenleriOlustur,
};
