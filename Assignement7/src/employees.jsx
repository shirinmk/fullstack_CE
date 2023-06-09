

const intialEmployees = [
  {
    id:1,
    name: "shirin",
    ext: 1124,
    email:"rwar@dkdk.com",
    title:"manager",
    dateHired: new Date('2018-01-01'),
    isEmployed:"yes",
   
    
  },
  {
    id:2,
    name: "max",
    ext: 1124,
    email:"rwar@dkdk.com",
    title:"CEO",
    dateHired: new Date('2018-05-01'),
    isEmployed:"no",
    
  },

]

class EmployeeList extends React.Component{
  render() {
    return (

      <React.Fragment>
     
        This is placeholder for employee list
        <h1>Employee Management Application</h1>
        <EmployeeFilter/>
        <EmployeeTable/>
        <EmployeeAdd />
     
      </React.Fragment>
    )
  }
}

class EmployeeFilter extends React.Component{
  render(){
    return(
      <div>this is placeholder for emplyee filter</div>
    )
  }
}
class EmployeeTable extends React.Component{
 constructor(){
  super()
  this.state = {employees: intialEmployees}
 }
  render(){
    const rowStyle ={
      border:"1px solid black",
      padding:4
    }
    const employeeRows =  this.state.employees.map(employee =>
      <EmployeeRow key={employee.id} rowStyle={rowStyle} employee={employee}/>)
    return(
      <table style={{width:"800px", borderCollapse:'collapse'}}>
        <thead>
          <tr >
            <th>Name</th>
            <th>Extension</th>
            <th>Email</th>
            <th>Title</th>
            <th>DAte hired</th>
            <th>Currencty</th>
          </tr>
        </thead>
        <tbody>
         
          {employeeRows}
        </tbody>
      </table>
    )
  }
}
class EmployeeRow extends React.Component{
  render(){
    const style = this.props.rowStyle
    const employee = this.props.employee
    return(
      <tr >
        {/* <td style={style}>{this.props.employee_name}</td>
        <td style={style}>{this.props.employee_ext}</td>
        <td style={style}>{this.props.employee_email}</td>
        <td style={style}>{this.props.employee_title}</td> */}
        <td style={style}>{employee.id}</td>
        <td style={style}>{employee.name}</td>
        <td style={style}>{employee.email}</td>
        <td style={style}>{employee.title}</td>
        <td style={style}>{employee.dateHired.toDateString()}</td>
        <td style={style}>{employee.isEmployed}</td>
      </tr>
      
    )
  }
}
class EmployeeAdd extends React.Component {
  render(){
    return(
      <div>this is placeholder for emplyee ADD</div>
    )
  }
}
const contentNode = document.getElementById('content')
ReactDOM.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>
  , contentNode
  )