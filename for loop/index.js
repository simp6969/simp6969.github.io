// function but() {
//   num = prompt("ymr neg too orullna u");
//   i = Number(num);
//   while (i < 1000) {
//     if (i % 2 == 0) {
//       console.log(i);
//     }
//     i++;
//   }
// }
// function addNumber() {
//   let str = prompt("Duriin too oruulna uu!");
//   let number = Number(str);
//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//     // sum = sum +i;
//   }
//   console.log(sum);
// }
// }

// function minus() {
//   let number = prompt("too");
//   num = Number(number);
//   num2 = 0;
//   for (let i = 1; i <= number; i++) {
//     num2 += i;
//     console.log(num2);
//     while (i < 1000) {
//       if (i % 2 == 0) {
//         console.log(i);
//       }
//     }
//   }
//   i++;
// }
function random_color() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function create() {
  let str = prompt("Enter a number");
  let number = Number(str);
  if (number > 1000000) {
    alert("cannot pass 1mil");
    number = 0;
  }
  num = 0;
  for (let i = number; i >= 1; i--) {
    let newElement = document.createElement("div");
    newElement.innerText =
      "box number: " + i + " hex code of box: " + random_color();
    newElement.style.cssText =
      "height:100px; width:100px; border-radius: 10px; padding: 10px; color: white; border:1px solid";
    newElement.style.backgroundColor = random_color();
    newElement.style.borderColor = random_color();
    document.getElementById("main").appendChild(newElement);
  }
}
