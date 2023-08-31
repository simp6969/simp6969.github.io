let num = Math.floor(Math.random() * 100);
let num2 = Math.floor(Math.random() * 100);
document.getElementById("idk1").value = num;
document.getElementById("idk2").value = num2;
let ans = num + num2;
console.log(ans);
function work() {
  user = document.getElementById("answer").value;
  if (user == ans) {
    alert("zuv baina");
  } else {
    alert("buruu baina");
  }
}
function reload() {
  let num = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  document.getElementById("idk1").value = num;
  document.getElementById("idk2").value = num2;
  let ans = num + num2;
  console.log(ans);
}
