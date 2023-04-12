const mongoose = require('mongoose');
const vaccineListSchema = mongoose.Schema({
    VaccineID: {
        type: String,
        required: true,
        unique: true,
    },
    VaccineName: {
        type: String,
        required: true,
    },
    DiseaseTargeted: {
        type: String,
        required: true,
    },
    Manufacturer: {
        type: String,
        required: true,
    },
    Doses: {
        type: Number,
        required: true,
    },
    
})
var vaccineList=mongoose.model('vaccineList',vaccineListSchema);
module.exports= vaccineList;