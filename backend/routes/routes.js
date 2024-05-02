
const express = require('express');
const router = express.Router();
const {
    createFemaleMeasurements,
    getAllFemaleMeasurements
} = require('../controllers/female.controller'); // Assuming your controller file is named female.controller.js

const {
    createMaleMeasurements,
    getAllMaleMeasurements
} = require('../controllers/male.controller'); // Assuming your male controller file is named male.controller.js


// Route for creating female measurements
router.post('/female/measurements', createFemaleMeasurements);
router.get('/female/measurements', getAllFemaleMeasurements);

// Routes for male measurements
router.post('/male/measurements', createMaleMeasurements);
router.get('/male/measurements', getAllMaleMeasurements);


module.exports = router;
