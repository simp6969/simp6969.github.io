function avarege(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  leng = list.length;
  let avareg = sum / leng;
  console.log(avareg);
}
num = [7, 7];
avarege(num);
