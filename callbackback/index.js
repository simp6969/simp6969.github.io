function uildel(number1, number2, temdegt) {
  console.log(temdegt(number1, number2));
}

function hasah(num1, num2) {
  return num1 - num2;
}

function nemeh(num1, num2) {
  return num1 + num2;
}

function huvaah(num1, num2) {
  return num1 / num2;
}

function urjih(num1, num2) {
  return num1 * num2;
}

uildel(20, 20, nemeh);
uildel(69, 420, hasah);
uildel(69, 420, huvaah);
uildel(69, 269, urjih);
