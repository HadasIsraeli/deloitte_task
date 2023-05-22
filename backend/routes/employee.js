const express = require('express');
const { getEmployees, getEmployee, getSearch } = require('../controllers/employeesController');
const router = express.Router();


router.get('/employees', getEmployees);

router.get('/employee/:id', getEmployee);

router.get('/search/:id', getSearch);

// router.delete('/employee/:id', deleteEmployee);

// router.patch('/employee/:id', updateEmployee);

module.exports = router;