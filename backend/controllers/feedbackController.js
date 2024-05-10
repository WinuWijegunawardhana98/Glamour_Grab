const Feedback = require('../models/Feedback');

// Get all feedback
exports.getAllFeedback = async (req, res) => {
    try {
        const feedbacks = await Feedback.find();
        res.json(feedbacks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get feedback by ID
exports.getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.id);
        if (!feedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.json(feedback);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new feedback
exports.createFeedback = async (req, res) => {
    const feedback = new Feedback(req.body);
    try {
        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update feedback
exports.updateFeedback = async (req, res) => {
    try {
        const updatedFeedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.json(updatedFeedback);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.id);
        if (!deletedFeedback) {
            return res.status(404).json({ message: 'Feedback not found' });
        }
        res.json({ message: 'Feedback deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
