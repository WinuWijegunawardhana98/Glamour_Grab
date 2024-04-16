const express = require("express");
const router = express.Router();
const {createFemaleMeasurements,getAllFemaleMeasurements} = require("../controllers/femalemeasure.controller");

//Create A Female Measurement
router.post("/create",createFemaleMeasurements);
router.get("/all",getAllFemaleMeasurements);

module.exports = router;