const mongoose = require("mongoose");

const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});

const EmployeeModel = mongoose.model("Employee", schema);

module.exports = EmployeeModel;
