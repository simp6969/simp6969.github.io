fetch("https://dummyjson.com/products/add", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "ariuka",
    price: "69$",
    /* other product data */
  }),
})
  .then((res) => res.json())
  .then(
    (data) => (
      (document.getElementById("container").innerText = data["title"]),
      console.log(data)
    )
  );
