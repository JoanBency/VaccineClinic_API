const mongoose = require('mongoose');
const vaccineAdministeredList = require("../Model/vaccineAdministeredList");
const patientListSchema = mongoose.Schema({
    PatientId: {
        type: String,
        required: true,
        unique: true,
    },
    PatientName: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    patientGender: {
        type: String,
        required: true,
    },
    patientAddress: {
        type: String,
        required: true,
    },
    patientPhone: {
        type: String,
        required: true,
    },
    patientEmail: {
        type: String,
        required: true,
    },
    patientVaccine: {
        type: [mongoose.Schema.Types.ObjectId], ref: 'vaccineAdministeredList',
        required: true,
    },
    patientNotes: {
        type: String,
        required: true,
    },
    patientDoctor: {
        type: String,
        required: true,
    },
    patientNurse: {
        type: String,
        required: true,
    },
    AccountCreated: {
        type: Date,
        default: new Date(),
    },
})
var patientList=mongoose.model('patientList',patientListSchema);
module.exports= patientList;