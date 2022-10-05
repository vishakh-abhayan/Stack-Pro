var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  const values = ["vishakh", "sundeep", "vikram", "arun"];
  res.render("index", { values });
});

module.exports = router;
