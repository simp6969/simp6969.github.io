function changeColor() {
  let som = "itgeltei bnu";
  let answer = window.confirm(som);
  if (answer == true) {
    let color = prompt("enter any color");
    document.getElementById("box").style.background = color;
    let colors = prompt("enter borders color");
    document.getElementById("box").style.borderColor = colors;
    let coloroftext = prompt("enter the color of text");
    document.getElementById("box").style.color = coloroftext;
    let textinprompt = prompt("change the character name");
    document.getElementById("box").innerText = textinprompt;
    document.getElementById("box").style.borderRadius = "100%";
    document.getElementById("box").style.marginTop = "0";
    document.getElementById("box").style.transform = "translateY(-525px)";
    document.getElementById("box").style.transition = " all 3s";
    let timeoutID = setTimeout(alert, 3000, "success!!");
    timeoutID;
  } else {
    alert("ungu solilt hereglegchiin huselteer zogssn");
  }
}
let num = 1;
function add1() {
  num += 2;
  alert(num);
}
