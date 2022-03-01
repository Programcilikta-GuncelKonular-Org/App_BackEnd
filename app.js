const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    console.log("İstek geldi...");
    // console.log("İstek geldi...",req);
    console.log(`Gelen Request ${req}`);
    res.status(200).send({
        "data":"deneme",
        "createdTime":"121212"
    });
});

app.listen(3002, () =>{
    console.log("3002 portu dinleniyor...");
})
