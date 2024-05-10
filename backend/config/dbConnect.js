const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://Glamour:123@cluster0.sxnf7qc.mongodb.net/GlamourGrab', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Remove deprecated options
            // useCreateIndex: true,
            // useFindAndModify: false
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
