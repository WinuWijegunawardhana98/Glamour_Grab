const express = require("express");
const router = express.Router();
const {createmaleMeasurements,getAllFemaleMeasurements} = require("../controllers/malemeasure.controller");

//Create A Female Measurement
router.post("/create",createmaleMeasurements);
router.get("/all",getAllmaleMeasurements);

module.exports = router;