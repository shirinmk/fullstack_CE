let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let amol = "Amol Shookup";
const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{sally}</li>
    <li>{mark}</li>
    <li>{holly}</li>
    <li>{amol.toUpperCase()}</li>
    <li>Shirin</li>
    <li>petsy</li>
    <li>house</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));