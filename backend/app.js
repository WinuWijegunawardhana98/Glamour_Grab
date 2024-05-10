

// Import modules
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const FittingRoute = require("./routes/routes");
const feedbackRoutes = require('./routes/feedbackRoutes');

// app
const app = express();

// db
dbConnect();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
app.use("/api/fitting", FittingRoute);

// Use feedbackRoutes
app.use('/api/feedback', feedbackRoutes);

// ports
const PORT = process.env.PORT || 8080;

// Listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});
