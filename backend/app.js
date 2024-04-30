// import modules
const express= require("express");
const mongoose=require("mongoose");
const morgan=require("morgan");
const cors=require("cors");
const bodyParser= require("body-parser");
const dotenv =require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const femaleMeasurementRoute = require("./routes/femalemeasure.route");
const male = require("./models/male.model");


//app
const app=express();


//db
dbConnect();



//middleware

app.use(bodyParser.json());
app.use (morgan("dev"));
app.use(cors({origin:true, credentials:true}));
app.use(express.json());


//routes

// const testRoutes =require("./routes/test");
// app.use("/", testRoutes);
app.use("/api/female/measurement",femaleMeasurementRoute);
app.use("/api/male/measurement",maleMeasurementRoute);



//ports
const PORT=process.env.PORT || 8080;


//Listener
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });