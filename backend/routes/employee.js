const express = require('express');
const { getEmployees, getEmployee, getSearch } = require('../controllers/employeesController');
const router = express.Router();


router.get('/employees', getEmployees);

router.post('/search', getSearch);

router.get('/employee/:id', getEmployee);

module.exports = router;