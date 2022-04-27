const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    arrival : {type: Date},
    airport : {type: String, enum:['AUS','DFW','DEN','LAX','SAN']}
    
},{
    timestamps: true
});

const flightSchema = new Schema(
    {
    airline: {type: String, enum: ['American','Southwest','United']},
    airport: {type: String, enum:['AUS','DFW','DEN','LAX','SAN'],default:'DEN'},
    flightNo: {type: Number, required: true, min: 10, max: 9999},
    departs: {type: Date, default:function(){
        const date = new Date();
        const addYear = date.getFullYear()+1
        console.log("This is default date", addYear);
    return date.setFullYear(addYear)
    }
    
    },
    destinations:[destinationSchema]
   
},{
    timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);
