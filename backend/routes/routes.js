const express = require('express');
const router = express.Router();
const {
    createFemaleMeasurements,
    getAllFemaleMeasurements
} = require('../controllers/femalemeasure.controller'); 

const {
    createmaleMeasurements,
    getAllmaleMeasurements
} = require('../controllers/malemeasure.controller'); 

// Route for  female measurements
router.post("/femalemeasure/create",createFemaleMeasurements)
router.get("/femalemeasure/all",getAllFemaleMeasurements)

// Route for  female measurements
router.post("/malemeasure/create",createmaleMeasurements)
router.get("/malemeasure/all",getAllmaleMeasurements)

module.exports = router;
