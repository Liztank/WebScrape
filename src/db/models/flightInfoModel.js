var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let FlightInfoCollection = new Schema({
	destination:{type:String, required:true},
    time:{type:String, required:true},
    temperature:{type:String, required:true},
    note:{type:String, required:true},
    createdAt:{type:Date, 'default':Date.now()},
    updatedAt:{type:Date, 'default':Date.now()}
});

module.exports = mongoose.model('flight', FlightInfoCollection);
