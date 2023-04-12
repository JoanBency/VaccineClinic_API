// const mysql = require('mysql2');
const mysql= require('mysql2');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const bodyparser = require('body-parser');
const patientRoute = require("./Routes/patients");
const vaccineRoute = require("./Routes/vaccines");
const vaccineAdministeredRoute = require("./Routes/vaccinesAdministered");

var app = express();

app.use(cors());
app.use('/patients',patientRoute);
app.use('/vaccines',vaccineRoute);
app.use('/vaccinesAdministered',vaccineAdministeredRoute);
app.use(bodyparser.json());


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

pool.getConnection((err, pool)=> {
    if(!err)
    console.log('Connection Established Successfully');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });



const port=3001;
app.listen(port, () =>{
    console.log('Server is running on port 3001');
})
module.exports = app;