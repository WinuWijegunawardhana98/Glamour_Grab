const mongoose = require('mongoose');

const femaleSchema = new mongoose.Schema({
    measurements:{
        type:String,
        required:true
    },
    bodyshape:{
        type:String,
    },
    skincolour:{
        type:String,
        required:false,
    }    
},{
    timestamps:true,
});

const Female = mongoose.model('Female', femaleSchema);

module.exports = Female;