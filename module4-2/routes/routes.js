// import { Express } from "express";
// const router = express.Router();
// router.route("/").get(() => console.log("get all emplyees"));
// //CREATING EMPLYEE
// router.route("/".post(() => console.log("create all emplyees")));
// // For SINGLE EMPLYEE UPDATE
// router.route("/:id".get(() => console.log("crat single  emplyee")));
// // router.route("/:id".patch(() => console.log("update emplyee")));
// router.route("/:id".delete(() => console.log("delte emplyee")));

// export default router;

import express from "express";
import {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.js";
const router = express.Router();
router.route("/api/employees").get(getAllEmployees);
//   .post(createEmployee);
// router.route("/:id")
//   .get(getEmployee)
//   .patch(updateEmployee)
//   .delete(deleteEmployee);
export default router;
