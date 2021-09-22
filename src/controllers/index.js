const express = require("express");
const scrapeService = require("./scrapeController");

const router = express.Router();


// router.get("/scrape/:destination", scrapeService.getTemperature);
router.get("/scrape/flight-info", scrapeService.getFlightInfo);


module.exports = router;