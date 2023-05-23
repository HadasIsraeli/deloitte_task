const Employee = require('../models/employeeModel');
const mongoose = require('mongoose');

const getEmployees = async (req, res) => {
    try {
        const allEmployee = await Employee.find({}).sort({ createdAt: -1 });
        return res.status(200).json(allEmployee);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getSearch = async (req, res) => {
    try {
        const search = await Employee.find({
            $or: [
              { Name: { $regex: req.body.searchText, $options: "i" } },
              { WorkTitle: { $regex: req.body.searchText, $options: "i" } }
            ]
          });
        return res.status(200).json(search);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
}

const getEmployee = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'getEmployee no such Employee id' });
    }
    const employee = await Employee.findById(id);
    if (!employee) {
        return res.status(404).json({ error: 'getEmployee no Employee found' });
    }
    res.status(200).json(employee);
}

module.exports = { getEmployees, getEmployee, getSearch }