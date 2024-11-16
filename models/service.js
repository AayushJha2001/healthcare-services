const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Enter Service name"],
    },
    description : {
        type : String,
        default : "Enter Service Description",
    },
    price : {
        type : Number,
        required : "Service price is required",
        min : [0, "price must be a positive value"]
    }
});

const Service  = mongoose.model("Service", serviceSchema);

module.exports = Service;
