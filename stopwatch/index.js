second = 0;
function start() {
  interval = setInterval(count, 1000);
}
let number = 0;
function count() {
  document.getElementById("start").innerHTML = number;
  number += 1;
}
function stop() {
  number = 0;
  document.getElementById("start").innerHTML = number;
  clearInterval(interval);
}
