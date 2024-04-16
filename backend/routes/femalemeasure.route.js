const express = require("express");
const router = express.Router();
const {createFemaleMeasurements} = require("../controllers/femalemeasure.controller");

//Create A Female Measurement
router.post("/create",createFemaleMeasurements);

module.exports = router;