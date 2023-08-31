function dot() {
  let element = document.createElement("p");
  element.innerText = ".";
  document.getElementById("inputs").appendChild(element);
}
//todo fix
let num1 = "";
let num2 = "";
let num3 = "";
let num4 = "";
function num(number) {
  num1 = num1 + number;
  document.getElementById("inputs").innerHTML = num1;
}
function work(operate) {
  if (operate == "%") {
    num1 = (num1 / 100).toString();
    document.getElementById("inputs").innerHTML = num1;
    num2 = "";
    num1 = "";
  } else if (operate == "minus") {
    num1 *= -1;
    document.getElementById("inputs").innerHTML = num1;
  } else {
    num2 = num1;
    num1 = "";
    num3 = operate;
    document.getElementById("inputs").innerHTML = num1 + num2;
  }
}
function equal() {
  number1 = Number(num2);
  number2 = Number(num1);
  if (num3 == "+") {
    num1 = (number1 + number2).toString();
  } else if (num3 == "-") {
    num1 = (number1 - number2).toString();
  } else if (num3 == "x") {
    num1 = (number1 * number2).toString();
  } else if (num3 == "÷") {
    num1 = (number1 / number2).toString();
  }
  document.getElementById("inputs").innerHTML = num1;
  num2 = "";
  num3 = "";
}
function ac() {
  num1 = "";
  num2 = "";
  num3 = "";
  document.getElementById("inputs").innerHTML = 0;
}
//tdo ends
