// Import necessary modules
const express = require('express');
const router = express.Router();

// Import the feedback controller
const feedbackController = require('../controllers/feedbackController');

// Define your feedback routes
router.get('/', feedbackController.getAllFeedback);
router.get('/:id', feedbackController.getFeedbackById);
router.post('/', feedbackController.createFeedback);
router.put('/:id', feedbackController.updateFeedback);
router.delete('/:id', feedbackController.deleteFeedback);

// Export the router
module.exports = router;
