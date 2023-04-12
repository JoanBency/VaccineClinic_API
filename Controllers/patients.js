const patientData = require("../Model/patientList");
const mongoose= require('mongoose');
const express = require('express');
const mysql= require('mysql2');
 
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

 
const getPatients = async (req, res) => {
    pool.query('SELECT * FROM vaccineclinic.PatientList', (err, patient, fields) => {
        if (!err)
            res.status(200).json(patient);
        else
            res.status(404).json({message: err.message});
    })
}

const getspecPatient = async (req,res) => {
    const id = req.params.PatientId;
try {
        const patient = await patientData.findOne({id: id});
res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createPatient =  async (req, res) => {
    console.log(req.body);

    let patient = req.body;
    var sql = "INSERT INTO vaccineclinic.PatientList (PatientName, Age, PatientGender, PatientAddress, PatientPhone, PatientEmail, PatientNotes, PatientDoctor, AccountCreated) VALUES ('"+patient.PatientName+"', '"+patient.Age+"', '"+patient.PatientGender+"', '"+patient.PatientAddress+"', '"+patient.PatientPhone+"', '"+patient.PatientEmail+"', '"+patient.PatientNotes+"', '"+patient.PatientDoctor+"', NOW())";
    pool.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ message : error.message});
        }
        else {
            res.status(201).json(patient);
        }
    })
}

module.exports = {getPatients, getspecPatient, createPatient};