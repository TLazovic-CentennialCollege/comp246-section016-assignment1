// users.js, Tomislav Lazovic, 301229459, 10/02/2022
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
