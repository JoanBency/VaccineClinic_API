const express = require("express");
const  vaccineAdministered_Act = require("../Controllers/vaccinesAdministered");
const bodyParser = require('body-parser');

const router = express.Router();
router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/:id', vaccineAdministered_Act.getSpecPatientVaccines);
// router.get('/:id', vaccineAdministered_Act.getspecVaccine);
router.post('/', vaccineAdministered_Act.createVaccineEntry);
// router.patch('/:id', vaccine_Act.updateVaccine);
// router.delete('/:id', vaccine_Act.deleteVaccine);

module.exports=router;