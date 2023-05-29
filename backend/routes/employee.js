const express = require('express');
const { getEmployees, getEmployee, getSearch } = require('../controllers/employeesController');
const router = express.Router();

const allowedOrigins = [
    "http://localhost:3000",
    "https://task-deloitte.netlify.app"
  ];

router.get('/employees', (req, res) => {
  const requestOrigin = req.headers.origin;

  if (allowedOrigins.includes(requestOrigin)) {
    res.header('Access-Control-Allow-Origin', requestOrigin);
  }

  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  getEmployees(req, res);
});

router.post('/search', (req, res) => {
    const requestOrigin = req.headers.origin;
  
    if (allowedOrigins.includes(requestOrigin)) {
      res.header('Access-Control-Allow-Origin', requestOrigin);
    }
  
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    getSearch(req, res);
  });

router.get('/employee/:id',(req, res) => {
    const requestOrigin = req.headers.origin;
  
    if (allowedOrigins.includes(requestOrigin)) {
      res.header('Access-Control-Allow-Origin', requestOrigin);
    }
    
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
  
    getEmployee(req, res);
  });

module.exports = router;