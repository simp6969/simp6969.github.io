var array = [420, 69, 20];
var num = 0;

for (i = 0; i < array.length; i++) {
  if (array[i] > num) {
    num = array[i];
  }
}
console.log("hamgiin ih too " + num);

for (i = 0; i < array.length; i++) {
  if (array[i] < num) {
    num = array[i];
  }
}
console.log("hamgiin baga too " + num);
