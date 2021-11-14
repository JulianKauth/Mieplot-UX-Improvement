
//https://stackoverflow.com/a/4793630/14053391
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// add a slider for the particle size
var size_input = document.getElementById("d");

var size_slider = document.createElement("input");
size_slider.setAttribute("type", "range");
size_slider.setAttribute("min", "1");
size_slider.setAttribute("max", "1000");
size_slider.setAttribute("value", "100");
size_slider.setAttribute("oninput", "document.getElementById(\"d\").value = this.value; calc()");

insertAfter(size_input, size_slider);

// add a slider for the index of refraction
var i_of_refraction_input = document.getElementById("n");

var iofr_slider = document.createElement("input");
iofr_slider.setAttribute("type", "range");
iofr_slider.setAttribute("max", "300");
iofr_slider.setAttribute("min", "100");
iofr_slider.setAttribute("value", "133");
iofr_slider.setAttribute("oninput", "document.getElementById(\"n\").value = this.value/100; calc()");

insertAfter(i_of_refraction_input, iofr_slider)

