const express = require("express");
const temp = require("./scrapeController");

const router = express.Router();


router.get("/scrape/:destination", temp.getTemperature);


module.exports = router;