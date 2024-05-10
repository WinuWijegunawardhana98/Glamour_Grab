const mongoose = require('mongoose');

const femaleSchema = new mongoose.Schema({
    measurements:{
        type:[String],
        required:true
    },
    bodyshape:{
        type:String,
    },
    skincolour:{
        type:String,
        required:false,
    },    

    Age:{
        type:Number,
    },
},{
    timestamps:true,
});

const Female = mongoose.model('Female', femaleSchema);

module.exports = Female;

// const basicMeasurements = [
//     'Bust',
//     'Waist',
//     'Hips',
//     'Inseam',
//     'ArmLength',
//     // Add more measurements as needed
// ];

// femaleInstance.save()
//     .then(doc => {
//         console.log(doc);
//     })
//     .catch(err => {
//         console.error(err);
//     });