// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form         = document.getElementById("addForm");
let table     = document.getElementById("employees");
let empCount = document.getElementById("empCount");


// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let count = 0

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
 
    let row = table.insertRow();
  
    let cellID = row.insertCell();
    let cellName = row.insertCell();
    let cellExt = row.insertCell();
    let cellEmail = row.insertCell();
    let cellDept = row.insertCell();
    let cellDelete = row.insertCell();

    cellID.appendChild(document.createTextNode(empId))
    cellName.appendChild(document.createTextNode(name))
    cellExt.appendChild(document.createTextNode(extension))
    cellEmail.appendChild(document.createTextNode(email))
    cellDept.appendChild(document.createTextNode(department))
   

    //ADDING THE DELETE BUTTON TO EACH ROW
    // CREATE DELETE BUTTON AND ADD BOOSTSRTRP CLASSES
    let deleteBtn = document.createElement('button')
    deleteBtn.className = 'btn btn-danger btn-sm text-right delete'
    let textDelete = document.createTextNode('X')
    deleteBtn.appendChild(textDelete)
    cellDelete.appendChild(deleteBtn)
    

    form.reset();
    count++;
    empCount.value =`(${count})`



    

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
        if(confirm(`are you sure to delete this row `)){
            table.deleteRow(e.target.parentElement.parentElement.rowIndex)
            // table.remove(e.target.childElement)
            // row.deleteRow(count-1)
            // deleteRow(e.target.path-to-tr-tag.rowIndex)
            count--;
            empCount.value = `(${count})`

          
        }
    }
})
// DELETE EMPLOYEE


//*delete is not working correctly