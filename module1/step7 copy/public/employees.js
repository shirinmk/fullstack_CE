let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, amol.toUpperCase()), /*#__PURE__*/React.createElement("li", null, "Shirin"), /*#__PURE__*/React.createElement("li", null, "petsy"), /*#__PURE__*/React.createElement("li", null, "house"));
ReactDOM.render(element, document.getElementById("content"));