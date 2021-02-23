const path = require("path");
const express = require("express");
const router = express.Router();
const product = require("./admin");

router.get("/", (req, res, next) => {
   console.log(product);
   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = router;
