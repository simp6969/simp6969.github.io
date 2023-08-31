fetch("https://api.thecatapi.com/v1/images/search?limit=10")
  .then((response) => response.json())
  .then((data) => {
    let cats = data;
    console.log(cats);
    for (let i = 0; i < cats.length; i++) {
      let element3 = document.createElement("img");

      element3.style.width = cats[i].width - 300;
      element3.style.height = cats[i].height - 300;
      element3.src = cats[i].url;
      document.getElementById("container").appendChild(element3);
    }
  });
