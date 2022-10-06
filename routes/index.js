var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // const values = ["vishakh", "sundeep", "vikram", "arun"];
  const person = {
    name: "vishakh",
    comments: { comment: "am a monster", date: "7-9-2004" },
  };
  res.render("index", { person });
});

module.exports = router;
