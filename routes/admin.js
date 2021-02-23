const path = require("path");
const express = require("express");
const { request } = require("http");
const router = express.Router();

router.get("/add-product", (req, res, next) => {
   res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

const products = [];

router.post("/product", (req, res, next) => {
   console.log(req.body);
   products.push({ title: req.body.title });
   res.redirect("/");
});

module.exports = router;
module.exports.products = products;
