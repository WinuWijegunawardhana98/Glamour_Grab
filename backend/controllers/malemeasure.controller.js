const Male = require("../models/male.model");

const createmaleMeasurements = async(req,res) =>{

    const { measurements, bodyshape, skincolour,Age} = req.body;
 
     const newMeasurements = new Male({
        measurements,
        bodyshape,
        skincolour,
        Age,
     });
     newMeasurements
         .save()
         .then((createMeasurements) => {
             res.json({createMeasurements,msg:'male Mmeasurement Successfully Created!',success:true})
         })
         .catch((error) => {
             res.status(400).json(error)
         })
 
 }

 const getAllmaleMeasurements =async(req,res)=>{
    try {
        const AllMaleMeasurements = await Male.find();
        res.json(AllMaleMeasurements)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {createmaleMeasurements,getAllmaleMeasurements};