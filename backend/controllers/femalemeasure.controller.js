const Female = require("../models/female.model");

const createFemaleMeasurements = async(req,res) =>{

    const { measurements, bodyshape, skincolour} = req.body;
 
     const newMeasurements = new Female({
        measurements,
        bodyshape,
        skincolour
     });
     newMeasurements
         .save()
         .then((createMeasurements) => {
             res.json({createMeasurements,msg:'Female Mmeasurement Successfully Created!',success:true})
         })
         .catch((error) => {
             res.status(400).json(error)
         })
 
 }

module.exports = {createFemaleMeasurements};