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
    PatientGender: {
        type: String,
        required: true,
    },
    PatientAddress: {
        type: String,
        required: true,
    },
    PatientPhone: {
        type: String,
        required: true,
    },
    PatientEmail: {
        type: String,
        required: true,
    },
    PatientVaccine: {
        type: String,
        required: true,
    },
    PatientNotes: {
        type: String,
        required: true,
    },
    PatientDoctor: {
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