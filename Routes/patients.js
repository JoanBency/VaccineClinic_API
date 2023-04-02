const express = require("express");
const  patient_Act = require("../Controllers/patients");
const bodyParser = require('body-parser');

const router = express.Router();
router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', patient_Act.getPatients);
router.get('/:id', patient_Act.getspecPatient);
router.post('/', patient_Act.createPatient);
// router.patch('/:id', patient_Act.updatePatient);
// router.delete('/:id', patient_Act.deletePatient);

module.exports=router;