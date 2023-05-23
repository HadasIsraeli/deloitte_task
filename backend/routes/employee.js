const express = require('express');
const { getEmployees, getEmployee, getSearch } = require('../controllers/employeesController');
const router = express.Router();


router.get('/employees', getEmployees);

router.get('/employee/:id', getEmployee);

router.post('/search', getSearch);

// router.delete('/employee/:id', deleteEmployee);

// router.patch('/employee/:id', updateEmployee);

module.exports = router;