const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const EmployeeModel = require("./model"); // Import the model

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

require("./connection"); // Connect to the database

// POST API to add an employee
app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await EmployeeModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});

// GET API to fetch all employees
app.get("/get", async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});

