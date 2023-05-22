const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Name: { type: String, required: true },
    WorkTitle: { type: String, required: true },
    Avatar: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Employee', EmployeeSchema);

