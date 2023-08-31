function minNum(num1, num2) {
  if (num1 < num2) {
    return "num1 is small " + num1;
  } else if (num2 < num1) {
    return "num2 is small " + num2;
  } else {
    console.log("error");
  }
}
const nums = minNum(69, 4827);
console.log(nums);
