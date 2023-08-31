fetch(
  "https://api.nasa.gov/planetary/apod?api_key=WSWQJg6ANBsrbBAAnozPUfCAQyoFxp50oJlegzO7"
)
  .then((response) => response.json())
  .then((data) => {
    let image = data;
    console.log(image);
    document.getElementById("idk").src = image.url;
    document.getElementById("idk2").innerHTML = image.title;
  });
