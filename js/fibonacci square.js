let fib = [0, 1];
for (let i = 1; i < 100; i++) {
  fib.push(fib[i] + fib[i - 1]);
}
console.log(fib);
