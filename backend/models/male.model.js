const mongoose = require('mongoose');

const maleSchema = new mongoose.Schema({
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
    },    

    Age:{
        type:Number,
    },
},{
    timestamps:true,
});

const male = mongoose.model('male', maleSchema);

module.exports = male;

