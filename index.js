function func()
{
let element = document.createElement("p");
let var1 = document.getElementById("add");
element.setAttribute("id","one");
var1.appendChild(element).textContent = prompt("Place Your Task");
element.setAttribute("class","one");
}


function func2()
{
  document.getElementById("one").remove();
}






