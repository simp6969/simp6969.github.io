const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 2.15,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 1.15,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 1.69,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 1.23,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 3.12,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 2,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 1.11,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 2.69,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 1.23,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 2.32,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
function active() {
  document.getElementById("photos").innerHTML = "";
  for (let i = 0; i < 10; i++) {
    let element = document.createElement("img");
    element.src = menu[i].img;
    element.style.cssText =
      "height: 150px; width: 225px; border: 4px solid brown; border-radius: 10px;";
    document.getElementById("photos").appendChild(element);

    let element2 = document.createElement("div");
    element2.innerText = menu[i].title + " " + menu[i].price + "$";
    element2.id = i;
    element2.style.cssText =
      "height:125px; width: 300px; text-align:center; display: flex;font-size: 25px; display: flex; flex-wrap:wrap; text-align: center";
    document.getElementById("photos").appendChild(element2);

    let element3 = document.createElement("p");
    element3.innerText = menu[i].desc;
    element3.style.fontSize = "15px";
    document.getElementById(i).appendChild(element3);
  }
}
active();
function work2(name) {
  document.getElementById("photos").innerHTML = "";
  for (let i = 0; i < 10; i++) {
    if (menu[i].category == name) {
      let element = document.createElement("img");
      element.src = menu[i].img;
      element.style.cssText =
        "height: 150px; width: 225px; border: 4px solid brown; border-radius: 10px;";
      document.getElementById("photos").appendChild(element);

      let element2 = document.createElement("div");
      element2.innerText = menu[i].title + " " + menu[i].price + "$";
      element2.id = i;
      element2.style.cssText =
        "height:125px; width: 300px; text-align:center; display: flex;font-size: 25px; display: flex; flex-wrap:wrap; text-align: center";
      document.getElementById("photos").appendChild(element2);
      let element3 = document.createElement("p");
      element3.innerText = menu[i].desc;
      element3.style.fontSize = "15px";
      document.getElementById(i).appendChild(element3);
    }
  }
}
