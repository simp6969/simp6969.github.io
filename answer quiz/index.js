const list = [
  {
    name: "sundar pichai",
    photo: "photo5.jpg",
  },
  {
    name: "magnus carlsen",
    photo: "photo4.png",
  },
  {
    name: "mark zucherberk",
    photo: "photo3.png",
  },
  {
    name: "nakamura hikaru",
    photo: "photo2.png",
  },
  {
    name: "elon musk",
    photo: "photo1.png",
  },
  {
    name: "sundar pichai",
    photo: "photo5.jpg",
  },
];
var num = 0;
let photo = document.createElement("img");

photo.style.cssText = "height: 300px; width: 250px; margin-top: 10px";

function zurag() {
  photo.src = list[num].photo;
  photo.id = list[num].name;
}
function run() {
  num++;

  console.log("zurgiin id : " + photo.id);
  var values = document.getElementById("input_text").value;
  console.log("utga: " + values);

  if (photo.id == values) {
    alert("zuv baina");
    values = "";
    if (num == 5) {
      num = 0;
    }
  } else {
    values = "";
    if (num == 5) {
      num = 0;
    }
    alert("buruu baina");
  }
  zurag();
}
zurag();
document.getElementById("photos").appendChild(photo);
