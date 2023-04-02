const patientData = require("../Model/patientList");
const mongoose= require('mongoose');
const express = require('express');

 
const getPatients = async (req, res) => {
    try {
        const patient= await patientData.find();
        
        res.status(200).json(patient);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
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
    const newpatient = new patientData({
        PatientId: Math.random().toString().slice(2,10),
        PatientName:req.body.PatientName,
        Age:req.body.Age,
        patientGender: req.body.patientGender,
        patientAddress: req.body.patientAddress,
        patientPhone: req.body.patientPhone,
        patientEmail: req.body.patientEmail,
        patientVaccine: req.body.patientVaccine,
        patientNotes: req.body.patientNotes,
        patientDoctor: req.body.patientDoctor,
        patientNurse: req.body.patientNurse,
        // patientVaccine
        // patientVaccine
        // patientVaccine
        // patientVaccine
        // patientVaccine
        // patientVaccine
    })
    try {
        await newpatient.save();
        res.status(201).json(newpatient);
    } 
    catch(error) {
        res.status(400).json({ message : error.message});
    }
}

module.exports = {getPatients, getspecPatient, createPatient};