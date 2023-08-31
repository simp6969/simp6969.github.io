let number = 1;
let number3 = 2;
add_num = 0;
function addElement() {
  let element = document.createElement("div");
  element.style.cssText =
    "height:40px; width:auto; min-width: 40px; background-color:white; display:flex; justify-content:center; align-items:center; gap: 30px; background-color: #FFD700; border-radius: 10px;padding: 10px;";
  element.innerHTML = number;
  document.getElementById("main").appendChild(element);
  number *= number3;
}
function removeElement() {
  let result = confirm("ta huuhdiig bur moson ustgasdaa itgeltei bnu?");
  if (result) {
    document.getElementById("main").lastChild.remove();
    number /= number3;
  }
}
