import Employee from "../models/Employee.js";

const getAllEmployees = async (req, res) => {
  try {
    const employee = await Employee.find({});
    // res.status(200).json({ employee });
    // res.send("Get all employees hey");
    res.status(200).json({ employee, count: employee.length });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
// this is asyn function
const getEmployee = async (req, res) => {
  // res.send("Get a single employee");
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOne({ _id: employeeId });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `no employee with id ${employeeId}found` });
    }
    res.status(200).json({ employee });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ msg: "employee added to database" });
    // res.send("Create a new employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const updateEmployee = async (req, res) => {
  // res.send("Update an existing employee");
  try {
    let { id: employeeId } = req.params;
    // accept three parameter ,refresh and return new one to me
    const employee = await Employee.findOneAndUpdate(
      { _id: employeeId },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!employee) {
      return res.status(404).json({ msg: `No employee with id found` });
    }
    res.status(200).json({ msg: "successfuy updated" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const deleteEmployee = async (req, res) => {
  // res.send("Delete an employee");
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOneAndDelete({ _id: employeeId });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `no employee with id ${employeeId}found` });
    }
    res.status(200).json({ msg: "employee deleted" });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
