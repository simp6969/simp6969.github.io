let points = 0;
let aldsn_onoo;
function quiz1() {
  let answer = prompt("delhiin hamgiin bayn hun hen be?");
  if (answer == "elon musk") {
    document.getElementById("quiz1").style.backgroundColor = "rgb(61, 187, 99)";
    points += 1;
    aldsn_onoo -= 1;
  } else {
    document.getElementById("quiz1").style.backgroundColor = "#c60000";
    alert("tanii hariult buruu bn");
  }
  let answer1 = prompt("1 shoond heden tseg bdg ve");
  if (answer1 == "21") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz1").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    document.getElementById("quiz1").style.backgroundColor = "#c60000";
    alert("tanii hariult buruu bn");
  }
  let answer2 = prompt("sushi haanas garaltai ve?");
  if (answer2 == "hytad") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz1").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    document.getElementById("quiz1").style.backgroundColor = "#c60000";
    alert("tanii hariult buruu bn");
  }
}
function quiz2() {
  let answer = prompt(
    "2021 ond ymr kino netflixiin uzeltiin toog terguulsen be?"
  );
  if (answer == "squid game") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz2").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz2").style.backgroundColor = "#c60000";
  }
  let answer1 = prompt("anhnii iphone heden ond garch baisan be?");
  if (answer1 == "2007") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz2").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz2").style.backgroundColor = "#c60000";
  }
  let answer2 = prompt("twitteriin anhnii nern yu bsn be?");
  if (answer2 == "twttr") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz2").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz2").style.backgroundColor = "#c60000";
  }
}
function quiz3() {
  let answer = prompt("himiin elementuudn hedn elementte ve");
  if (answer == "118") {
    points += 1;
    document.getElementById("quiz3").style.backgroundColor = "rgb(61, 187, 99)";
    aldsn_onoo -= 1;
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz3").style.backgroundColor = "#c60000";
  }
  let answer1 = prompt("atomiin heseguudees alin electron tsenneggui be?");
  if (answer1 == "neurton") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz3").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz3").style.backgroundColor = "#c60000";
  }
  let answer2 = prompt("porsche mashinii logond ymr amitan baidag ve??");
  if (answer2 == "mori") {
    points += 1;
    aldsn_onoo -= 1;
    document.getElementById("quiz3").style.backgroundColor = "rgb(61, 187, 99)";
  } else {
    alert("hariult buruu bn");
    document.getElementById("quiz3").style.backgroundColor = "#c60000";
  }
}
var element = document.getElementById("ipaddr");
fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => (document.getElementById("ipaddr").innerText = data.ip));
element.style.display = "none";
function point() {
  alert(points);
  element.style.display = "block";
}
