// let str = " ymr neg ug end bn ";
// let str2 = "bas dahin ymar neg ug end bn";
// word = str.split("");
// console.log(word[2].toUpperCase());
// console.log(word);
// butsah = str.split();
// console.log(butsah);
// console.log(str.replace("ug", "hun"));
// console.log(str.replaceAll("ug", "hun"));
// //zai avah
// let any_text = str.trim();
// console.log(any_text);
// niiluleh = str.concat("", str2);
// console.log(niiluleh);
// let tom_useg = str.toUpperCase();
// console.log(tom_useg);
function containerrun() {
  let main = document.getElementById("text_field");
  let usr = document.getElementById("inputing").value;
  usr.toLowerCase();
  usr.split("");
  let usr1 = usr.toLowerCase();
  let newusr = usr1.trim();
  let up = newusr.replace(newusr[0], newusr[0].toUpperCase());
  main.innerText = up;
}
