function pushZerosToEnd(arr, n) {
  let count = 0;
  for (let i = 0; i < n; i++) if (arr[i] != 0) arr[count++] = arr[i];
  while (count < n) arr[count++] = 0;
}

let arr = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
let n = arr.length;
pushZerosToEnd(arr, n);
for (let i = 0; i < n; i++) console.log(arr[i] + " ");
