const intialEmployees = [{
  id: 1,
  name: "shirin",
  ext: 1124,
  email: "rwar@dkdk.com",
  title: "manager",
  dateHired: new Date('2018-01-01'),
  isEmployed: "yes"
}, {
  id: 2,
  name: "max",
  ext: 1124,
  email: "rwar@dkdk.com",
  title: "CEO",
  dateHired: new Date('2018-05-01'),
  isEmployed: "no"
}];
class EmployeeList extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, "This is placeholder for employee list", /*#__PURE__*/React.createElement("h1", null, "Employee Management Application"), /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement(EmployeeTable, null), /*#__PURE__*/React.createElement(EmployeeAdd, null));
  }
}
class EmployeeFilter extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "this is placeholder for emplyee filter");
  }
}
class EmployeeTable extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: intialEmployees
    };
  }
  render() {
    const rowStyle = {
      border: "1px solid black",
      padding: 4
    };
    const employeeRows = this.state.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      key: employee.id,
      rowStyle: rowStyle,
      employee: employee
    }));
    return /*#__PURE__*/React.createElement("table", {
      style: {
        width: "800px",
        borderCollapse: 'collapse'
      }
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Extension"), /*#__PURE__*/React.createElement("th", null, "Email"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "DAte hired"), /*#__PURE__*/React.createElement("th", null, "Currencty"))), /*#__PURE__*/React.createElement("tbody", null, employeeRows));
  }
}
class EmployeeRow extends React.Component {
  render() {
    const style = this.props.rowStyle;
    const employee = this.props.employee;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.id), /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.name), /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.email), /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.title), /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.dateHired.toDateString()), /*#__PURE__*/React.createElement("td", {
      style: style
    }, employee.isEmployed));
  }
}
class EmployeeAdd extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", null, "this is placeholder for emplyee ADD");
  }
}
const contentNode = document.getElementById('content');
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeList, null)), contentNode);