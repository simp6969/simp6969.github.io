function updateDateTime() {
  var dateTimeDisplayElement = document.getElementById("dateTimeDisplay");
  var currentDateTime = new Date();
  dateTimeDisplayElement.textContent = currentDateTime.toLocaleString();
}
updateDateTime();
setInterval(updateDateTime, 1000);
function addItem() {
  element.innerHTML = document.getElementById("nameInput").value;
  document.getElementById("todo").appendChild(element);
}
function remove_button() {
  document.getElementById("todo").lastChild.remove();
}
