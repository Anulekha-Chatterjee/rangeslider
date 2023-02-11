import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<input type = 'range' id = 'rangeSlider'/>
<div id = 'pieChart' style = '--percentage:10%'/>
 

`;

var pie = document.getElementById("pieChart");

document.getElementById("rangeSlider").addEventListener("input", cb);

function cb(e) {
  pie.style = `--percentage:${e.target.value}%`;
}
