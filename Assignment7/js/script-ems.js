// M8 Assignment - Part 2, The Employee Management System (80 points)

// In this assignment you will build on the M8 Assignment. If you recall, in the M8 Assignment, the user was able to add an employee, view that employee within the grid, and then delete an employee by clicking the delete button that appears to the right of each row. While this was a great learning opportunity as it relates to DOM scripting, it wasn’t realistic as it didn’t allow you to persist the employee data in any way. When the browser was closed, the data was gone and had to be reentered again. In this version, you will modify the application to use arrays and then store the populated array within web storage (localStorage) in order to persist the data across browser sessions.

// The Interface

// As was the case in M8 Assignment, the UI has been created for you using Bootstrap and will look identical to the M8 Assignment. You will not need to touch the HTML.

// Pay close attention to the table markup of this version of the assignment however. You will create the row structure differently in this assignment than what you did in the M8 Assignment. More on this in a bit.

// Loading an Initial Set of Employees

// For this assignment you will use arrays to structure your data. You will need to create an initial array and populate it with at least 5 employees. When the page loads, the grid should automatically populate with those initial 5 employees. The data for each employee should be structured so that you’re storing the employee ID (number), employee name (string), 4 digit extension (number), email (string), and department (string).

// Building the Grid

// In the M8 Assignment you used the table’s DOM methods insertRow(), insertCell(), and deleteRow() to manipulate the row structure for the table. In this assignment you will take a different approach. In this assignment, you’ll see the table includes a <tbody> tag. Use this tag as a ‘hook’ and rely on the innerHTML property to programmatically construct the row and cell structure for the table using a template literal string.

// Considerations:

// This will be its own function. It will be called when the page loads, when an employee is added, and when an employee is deleted.
// Use a for / of loop here to loop through the array and build each row in code.
// Use the appendChild() method to append the constructed row to the <tbody> tag.
// Adding and Removing Data

// You’ll need two separate functions for adding and removing employees. Remember to pass the array into these functions and then use array specific methods to add / remove employees from the array. Don’t forget to call the function to build the grid once an employee has been added or removed.

// Considerations:

// When a new employee is added, you’ll need to create a new array. This array is what will be added into the main employees array.
// Storing Data

// Use web storage (localStorage) to persist the array. It should be stored when the page loads / when the grid is built, when a new employee is added, and when an employee is deleted. When the page loads, make sure to check to see if the object exists in storage before you attempt to extract the data from storage.

// Considerations

// You’ll need to use JSON.stringify() to store the array in storage.
// You’ll need to use JSON.parse() to retrieve the array from storage.
// **************************************************

let form = document.getElementById("addForm");
let arrayOfEmpNew =[]
// CREATE AN ARRAY OF EMPLOYEES
let arrayOfEmployees = [
  ["empId1", "name1", "ext1", "email1", "depart1"],
  ["empId2", "name2", "ext2", "email2", "depart2"],
  ["empId3", "name3", "ext3", "email3", "depart3"],
];

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
if (localStorage.getItem("arrayOfEmployees")) {
  arrayOfEmployees = JSON.parse(localStorage.getItem("arrayOfEmployees"));
} else {
  localStorage.setItem("arrayOfEmployees", JSON.stringify(arrayOfEmployees));
}

// GET DOM ELEMENTS
let table = document.getElementById("empTable");
let tableBody = document.getElementById("tt");
var tbodyRef = document.getElementById('empTable').getElementsByTagName('tbody')[0];
let empID = document.querySelector("#id").value;
let empName = document.querySelector("#name").value;
let empExt = document.querySelector("#extension").value;
let empEmail = document.querySelector("#email").value;
let empDept = document.querySelector("#department").value;
// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
let empRow = tbodyRef.insertRow();

arrayOfEmployees.forEach((item) => {
  console.log(`elemtn is ${item}`);
  console.log(`size of this elem is ${item.length}`);
  let cellID = empRow.insertCell();
  cellName = empRow.insertCell();
  cellExt = empRow.insertCell();
  cellEmail = empRow.insertCell();
  cellDept = empRow.insertCell();
  cellDelete = empRow.insertCell();
  for (let i = 0; i < item.length; i++) {
    console.log("inisde for");
    empID = item[0];
    empName = item[1];
    empExt = item[2];
    empEmail = item[3];
    empDept = item[4];
    // console.log(`${empId}  ${department}`)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  }
  cellID.appendChild(document.createTextNode(empID));
  cellName.appendChild(document.createTextNode(empName));
  cellExt.appendChild(document.createTextNode(empExt));
  cellEmail.appendChild(document.createTextNode(empEmail));
  cellDept.appendChild(document.createTextNode(empDept));
  empRow = table.insertRow();
});

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS

// ADD EMPLOYEE
form.addEventListener("submit", (e) => {
  // PREVENT FORM SUB
  e.preventDefault();
  
  // GET THE VALUES FROM THE TEXT BOXES
  let empID = document.querySelector("#id").value;
  let empName = document.querySelector("#name").value;
  let empExt = document.querySelector("#extension").value;
  let empEmail = document.querySelector("#email").value;
  let empDept = document.querySelector("#department").value;

  // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
  arrayOfEmpNew.push(empID,empName,empExt,empEmail,empDept)
  console.log(arrayOfEmpNew)
  

  // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
  arrayOfEmployees.push(arrayOfEmpNew)
  console.log(arrayOfEmployees)
  console.log(arrayOfEmployees.length)
  // BUILD THE GRID
  buildGrid()
  // RESET THE FORM

  // SET FOCUS BACK TO THE ID TEXT BOX
});

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  // CONFIRM THE DELETE
  // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
  // REMOVE EMPLOYEE FROM ARRAY
  // BUILD THE GRID
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION
  // tbodyRef.deleteRow(0)
  tbodyRef.remove()
  // REBUILD THE TBODY FROM SCRATCH

// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE


arrayOfEmployees.forEach((item) => {
  console.log(`elemtn is ${item}`);
  console.log(`size of this elem is ${item.length}`);
  let cellID = empRow.insertCell();
  cellName = empRow.insertCell();
  cellExt = empRow.insertCell();
  cellEmail = empRow.insertCell();
  cellDept = empRow.insertCell();
  cellDelete = empRow.insertCell();
  for (let i = 0; i < item.length; i++) {
    console.log("inisde for");
    empID = item[0];
    empName = item[1];
    empExt = item[2];
    empEmail = item[3];
    empDept = item[4];
    // console.log(`${empId}  ${department}`)
    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  }
  cellID.appendChild(document.createTextNode(empID));
  cellName.appendChild(document.createTextNode(empName));
  cellExt.appendChild(document.createTextNode(empExt));
  cellEmail.appendChild(document.createTextNode(empEmail));
  cellDept.appendChild(document.createTextNode(empDept));
  empRow = table.insertRow();
}
)

  // LOOP THROUGH THE ARRAY OF EMPLOYEES
  // REBUILDING THE ROW STRUCTURE
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  // UPDATE EMPLOYEE COUNT
  // STORE THE ARRAY IN STORAGE
}
