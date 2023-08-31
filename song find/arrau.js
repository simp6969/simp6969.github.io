durtai_duu = [
  "i see london i see france",
  "picololo",
  "vandebo hair",
  "look at me",
];
durtai_duu_link = [
  "https://youtu.be/x-AhsyXaxI0",
  "https://youtu.be/AMPa3339G5I",
  "https://youtu.be/Z_p7QW6jy6g",
  "https://www.youtube.com/watch?v=wJGcwEv7838&pp=ygUKbG9vayBhdCBtZQ%3D%3D",
];
function find_son(song) {
  if (durtai_duu.includes(song)) {
    alert("tanii duu bn");
    index = durtai_duu.indexOf(song);
    window.open(durtai_duu_link[index]);
  } else {
    alert("algaa");
  }
}

function hailt() {
  text = prompt("durtai duunii ner oruulna uu");
  find_son(text);
}
