const vaccineData = require("../Model/vaccineList");
const mongoose= require('mongoose');
const express = require('express');
 
const getVaccines = async (req, res) => {
    try {
        const vaccine= await vaccineData.find();
        
        res.status(200).json(vaccine);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecVaccine = async (req,res) => {
    const id = req.params.VaccineId;
try {
        const vaccine = await vaccineData.findOne({id: id});
res.status(200).json(stud);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createVaccine =  async (req, res) => {
    console.log(req.body);
    const newvaccine = new vaccineData({
        VaccineId: Math.random().toString().slice(2,8),
        VaccineName: req.body.VaccineName,
        DiseaseTargeted: req.body.DiseaseTargeted,
        Manufacturer: req.body.Manufacturer,
        DosesLeft: req.body.DosesLeft})
    try {
        await newvaccine.save();
        res.status(201).json(newvaccine);
    } 
    catch(error) {
        res.status(400).json({ message : error.message});
    }
}

module.exports = {getVaccines, getspecVaccine, createVaccine};