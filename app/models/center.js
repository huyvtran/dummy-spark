var mongoose = require('mongoose');
 
var CenterSchema = new mongoose.Schema({

    center_name: {
        type: String,
        required: true
    },
    center_code: {
    	type: String,
        required: true,
        index: { unique: true }
    },
    center_email: {
    	type: String,
    	required: true,
        index: { unique: true }
    },
    center_phoneno:  {
    	type: String,
    	required: true
    },
    center_address: {
    	type: String,
    	required: true
    },
    active: {
        type: Boolean,
    }

}, {
    timestamps: true
});
 
module.exports = mongoose.model('Center', CenterSchema);