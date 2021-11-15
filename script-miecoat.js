
//https://stackoverflow.com/a/4793630/14053391
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// add a slider for the core size
var core_input = document.getElementById("r");

var core_slider = document.createElement("input");
core_slider.setAttribute("type", "range");
core_slider.setAttribute("min", "0");
core_slider.setAttribute("max", "250");
core_slider.setAttribute("value", "25");
core_slider.setAttribute("oninput", "document.getElementById(\"r\").value = this.value; calc()");

insertAfter(core_input, core_slider);

// add a slider for the shell size
var shell_input = document.getElementById("rs");

var shell_slider = document.createElement("input");
shell_slider.setAttribute("type", "range");
shell_slider.setAttribute("min", "0");
shell_slider.setAttribute("max", "250");
shell_slider.setAttribute("value", "5");
shell_slider.setAttribute("oninput", "document.getElementById(\"rs\").value = this.value; calc()");

insertAfter(shell_input, shell_slider);

// add a slider for the index of refraction
var i_of_refraction_input = document.getElementById("n");

var iofr_slider = document.createElement("input");
iofr_slider.setAttribute("type", "range");
iofr_slider.setAttribute("min", "1");
iofr_slider.setAttribute("max", "3");
iofr_slider.setAttribute("step", "0.01");
iofr_slider.setAttribute("value", "1.33");
iofr_slider.setAttribute("oninput", "document.getElementById(\"n\").value = this.value; calc()");

insertAfter(i_of_refraction_input, iofr_slider)

// change how the shell thickness is defined to "thickness" instead of "radius". Is more intuitive 
// and prevents the user from selecting a shell that is smaller than the core.
document.getElementById("ss").selectedIndex = 2;
//call the event hook to update the value of the field.
shell_input.value = "5";
