// const mysql = require('mysql2');
const mongoose= require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
const patientRoute = require("./Routes/patients");

var app = express();

app.use('/patients',patientRoute);
app.use(bodyparser.json());


mongoose.connect(
    process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/VaccineClinic",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
const con= mongoose.connection;
try{
    con.on('open',() => {
        console.log('Connected to mongoDB');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const port=3001;
app.listen(port, () =>{
    console.log('Server is running on port 3001');
})
module.exports = app;



// //MySQL details
// var mysqlConnection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'vaccineclinic',
//     multipleStatements: true
//     });

// //Connect to MySQL
// mysqlConnection.connect((err)=> {
//     if(!err)
//     console.log('Connection Established Successfully');
//     else
//     console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
//     });