// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form         = document.getElementById("addForm");
let table     = document.getElementById("employees");


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 1

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
   
    // GET THE VALUES FROM THE TEXT BOXES
    let empId           = document.getElementById("id").value;
    let name            = document.getElementById("name").value;
    let extension       = document.getElementById("extension").value;
    let email           = document.getElementById("email").value;
    let department      = document.getElementById("department").value;

    //CREATE ROW IN TABLE with this structure
    //<tr> <td> empId</td> <td> empId</td> <td> empId</td> <td> empId</td> <td> empId</td> </tr>
 
    let row = table.insertRow(count);
  
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = empId;
    cell2.innerHTML = name;
    cell3.innerHTML = extension;
    cell4.innerHTML = email;
    cell5.innerHTML = department;
   

    //ADDING THE DELETE BUTTON TO EACH ROW
    // CREATE DELETE BUTTON AND ADD BOOSTSRTRP CLASSES
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm text-right delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    row.appendChild(deleteBtn)
    count = count + 1

    form.reset();



    

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

    // CREATE THE DELETE BUTTON

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

})
  //THEN CLEAR FIELDS

table.addEventListener('click',(e) => {
    // console.log('click')
    if(e.target.classList.contains('delete')){
        // console.log("dlele")
        if(confirm(`are you sure to delete this row ${e.target.parentElement.innerText}`)){
            // table.remove(e.target.childElement)
            // row.deleteRow(count-1)
            // deleteRow(e.target.path-to-tr-tag.rowIndex)
          
        }
    }
})
// DELETE EMPLOYEE


//*delete is not working correctly