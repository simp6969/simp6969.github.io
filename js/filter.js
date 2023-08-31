const words = [
  "delay",
  "woozy",
  "rake",
  "pat",
  "abrasive",
  "like",
  "laugh",
  "collect",
  "trains",
  "productive",
  "teeny-tiny",
  "quaint",
];

let response = words.filter((word) => word.length <= 5);
let response1 = words.filter((word) => word.charAt[0] !== "R");
let response2 = words.filter((word) => console.log(word.charAt(0) === "l"));
let response3 = words.filter((word) => !word.includes("-"));
console.log(response);
console.log(response1);
console.log(response2);
console.log(response3);
