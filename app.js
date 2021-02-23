const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminRoutes);
app.use(adminRoutes);

app.use(shopRoutes);

app.use("/", (req, res, next) => {
   // res.sendFile(path.join(__dirname, "../", "views", "error.html"));
   // res.status(404).sendFile(path.join(__dirname, "views", "error.html"));
   res.status(404).render("404", { pageTitle: "page Not Found" });
});
app.listen(4000, () => console.log("server running on port 4000"));
