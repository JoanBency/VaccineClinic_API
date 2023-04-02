const express = require("express");
const  vaccine_Act = require("../Controllers/vaccines");
const bodyParser = require('body-parser');

const router = express.Router();
router.use(express.json());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));


router.get('/', vaccine_Act.getVaccines);
router.get('/:id', vaccine_Act.getspecVaccine);
router.post('/', vaccine_Act.createVaccine);
// router.patch('/:id', vaccine_Act.updateVaccine);
// router.delete('/:id', vaccine_Act.deleteVaccine);

module.exports=router;