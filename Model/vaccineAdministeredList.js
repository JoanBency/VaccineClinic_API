const mongoose = require('mongoose');
const vaccineList = require("../Model/vaccineList");
const vaccineAdministeredListSchema = mongoose.Schema({
    vaccineDetails: {
        type: mongoose.Schema.Types.ObjectId, ref: 'vaccineList',
        required: true,
    },
    AdministeredBy: {
        type: String,
        required: true,
    },
    AdministeredOn: {
        type: Date,
        default: new Date(),
    },
})
var vaccineAdministeredList=mongoose.model('vaccineAdministeredList',vaccineAdministeredListSchema);
module.exports= vaccineAdministeredList;