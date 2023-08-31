function ask() {
  let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  console.log(randomNumber);
  for (let i = 0; i < 10; i++) {
    let ans = 0;
    console.log(ans);
    ans = prompt("ymr neg too oruul");
    if (ans > randomNumber) {
      alert("het ih");
    } else if (ans < randomNumber) {
      alert("het baga");
    } else if (ans == randomNumber) {
      alert("ta ylla");
      i += 10000;
    }
  }
}
