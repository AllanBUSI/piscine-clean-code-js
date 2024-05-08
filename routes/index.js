const express = require('express');
const router = express.Router();
const s1 = require('../controllers/exercice1Controller');
const s2 = require('../controllers/exercice2Controller');
const s3 = require('../controllers/exercice3Controller');
const s4 = require('../controllers/exercice4Controller');
const s5 = require('../controllers/exercice5Controller');
const s6 = require('../controllers/exercice6Controller');
const s7 = require('../controllers/exercice7Controller');
const s8 = require('../controllers/exercice8Controller');
const s9 = require('../controllers/exercice9Controller');
const s10 = require('../controllers/exercice10Controller');
const exercice1 = require('../controllers/exercice1Controller');
const exercice2 = require('../controllers/exercice2Controller');
const exercice3 = require('../controllers/exercice3Controller');
const exercice4 = require('../controllers/exercice4Controller');
const exercice5 = require('../controllers/exercice5Controller');
const exercice6 = require('../controllers/exercice6Controller');
const exercice7 = require('../controllers/exercice7Controller');
const exercice8 = require('../controllers/exercice8Controller');
const exercice9 = require('../controllers/exercice9Controller');
const exercice10 = require('../controllers/exercice10Controller');


router.get('/s1/exercice1', s1.exercice1);
router.get('/s1/exercice2', s2.exercice2);
router.get('/s1/exercice3', s3.exercice3);
router.get('/s1/exercice4', s4.exercice4);
router.get('/s1/exercice5', s5.exercice5);
router.get('/s1/exercice7', s7.exercice7);
router.get('/s1/exercice8', s8.exercice8);
router.get('/s1/exercice9', s9.exercice9);
router.get('/s1/exercice10', s10.exercice10);

router.post('/s2/create', exercice1.createUser);
router.get('/s2/get/:id', exercice2.getUser);
router.put('/s2/update/:id', exercice3.updateUser);
router.delete('/s2/delete/:id', exercice4.deleteUser);
router.get('/s2/all', exercice5.getAllUsers);
router.put('/s2/updateAge/:id', exercice6.updateAge);
router.get('/s2/emails', exercice7.getEmails);
router.delete('/s2/deleteByName/:name', exercice8.deleteByName);
router.get('/s2/searchByEmail', exercice9.searchByEmail);
router.delete('/s2/deleteMultiple', exercice10.deleteMultipleUsers);

module.exports = router;


module.exports = router;