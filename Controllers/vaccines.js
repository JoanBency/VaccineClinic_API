const vaccineData = require("../Model/vaccineList");
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

const getVaccines = async (req, res) => {
    pool.query('SELECT * FROM vaccineclinic.VaccineList', (err, vaccine, fields) => {
        if (!err)
            res.status(200).json(vaccine);
        else
            res.status(404).json({message: err.message});
        })
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
    let vaccine = req.body;
    var sql = "INSERT INTO vaccineclinic.VaccineList (VaccineName, DiseaseTargeted, Manufacturer, Doses) VALUES ('"+vaccine.VaccineName+"', '"+vaccine.DiseaseTargeted+"', '"+vaccine.Manufacturer+"', '"+vaccine.Doses+"')";
    pool.query(sql, (err, result) => {
        if (err) {
            res.status(400).json({ message : error.message});
        }
        else {
            res.status(201).json(vaccine);
        }
    })
}

module.exports = {getVaccines, getspecVaccine, createVaccine};