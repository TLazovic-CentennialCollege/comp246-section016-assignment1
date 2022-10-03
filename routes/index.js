// index.js, Tomislav Lazovic, 301229459, 10/02/2022
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("home.ejs", { title: "Home" });
});

/* GET aboutMe page. */
router.get("/aboutMe", function (req, res, next) {
  res.render("aboutMe.ejs", { title: "About Me" });
});

/* GET projects page. */
router.get("/projects", function (req, res, next) {
  res.render("projects.ejs", { title: "Projects" });
});

/* GET services page. */
router.get("/services", function (req, res, next) {
  res.render("services.ejs", { title: "Services" });
});

/* GET contactMe page. */
router.get("/contactMe", function (req, res, next) {
  res.render("contactMe.ejs", { title: "Contact Me" });
});

module.exports = router;
