document.addEventListener("DOMContentLoaded", init);

function init() {
  // HELPER FUNCTION TO RETURN DOM ELEMENT
  let id;
  let email;
  let ext;
  let department;
  let name;
  let investment;
  let output;
  const $ = (id) => document.getElementById(id);

  // GET THE DOM ELEMENTS
  id = $("id");
  ext = $("ext");
  email = $("email");
  name = $("name");
  department = $("department");
  output = $("output");

  let btn = document.getElementById("submit");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log('hello')
    console.log(
      `${id.value} \n ${ext.value} \n ${email.value} \n ${name.value} \n ${department.value}`
    );
    // output.innerHTML = `${id.value} \n ${ext.value} \n ${email.value} \n ${name.value} \n ${department.value}`;// not working this line
    document.write(`${id.value} </br> ${ext.value} <br> ${email.value} <br> ${name.value} <br> ${department.value}`)
  });
}
