const male = require("../models/male.model");

const createmaleMeasurements = async(req,res) =>{

    const { measurements, bodyshape, skincolour} = req.body;
 
     const newMeasurements = new male({
        measurements,
        bodyshape,
        skincolour
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
        const AllmaleMeasurements = await male.find();
        res.json(AllFemaleMeasurements)
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {createmaleMeasurements,getAllmaleMeasurements};