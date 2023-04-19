const vaccineAdministeredList = require("../Model/vaccineAdministeredList");
// const mongoose= require('mongoose');
const express = require('express');
const mysql= require('mysql2');
 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

 
const getSpecPatientVaccines = async (req, res) => {
    const id = req.params.id;
    pool.query("SELECT VAL.VaccineEntryId, NL.NurseName, VAL.AdministeredOn, VL.VaccineName, VL.DiseaseTargeted, VAL.PrescriptionId FROM vaccineclinic.VaccineAdministeredList AS VAL , vaccineclinic.PatientList AS PL, vaccineclinic.VaccineList AS VL, vaccineclinic.NursesList AS NL WHERE VAL.PatientId = PL.PatientId AND VAL.VaccineId = VL.VaccineId AND VAL.AdministeredById = NL.NurseId AND VAL.PatientId = "+id, (err, patient, fields) => {
        if (!err)
            res.status(200).json(patient);
        else
            res.status(404).json({message: err.message});
    })
}

const getspecDetailsPatientVaccine = async (req,res) => {
    const id = req.params.id;
    pool.query("SELECT VL.VaccineName, VL.DiseaseTargeted FROM vaccineclinic.VaccineAdministeredList AS VAL , vaccineclinic.PatientList AS PL, vaccineclinic.VaccineList AS VL WHERE VAL.PatientId = PL.PatientId AND VAL.VaccineId = VL.VaccineId AND VAL.PatientId= "+id, (err, vaccineEntry, fields) => {
        if (!err)
            res.status(200).json(vaccineEntry);
        else
            res.status(404).json({message: err.message});
    })

try {
        const patient = await patientData.findOne({id: id});
res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}


const createVaccineEntry =  async (req, res) => {
    console.log(req.body);
    let vaccine = req.body;
    var sql = "INSERT INTO vaccineclinic.VaccineAdministeredList(AdministeredById, PatientId, VaccineId, PrescriptionId, AdministeredOn) VALUES ('"+vaccine.AdministeredById+"', '"+vaccine.PatientId+"', '"+vaccine.VaccineId+"', '"+vaccine.PrescriptionId+"', NOW())";
    pool.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ message : error.message});
        }
        else {
            res.status(201).json(vaccine);
        }
    })
}

module.exports = {getSpecPatientVaccines, createVaccineEntry, getspecDetailsPatientVaccine};