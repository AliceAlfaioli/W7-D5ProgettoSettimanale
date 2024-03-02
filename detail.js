const id = new URLSearchParams(window.location.search).get("idProdotto");

const container = document.getElementsByClassName("container")[0];

function crea(src, title, descrizione, prezzo) {
  container.innerHTML = `
    <img src=${src} alt="">
    <h1>${title}</h1>
    <p>${descrizione}</p>
    <p>${prezzo}</p>
    `;
}
const apiKey =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWRhMjRjNTllYzAwMTk5MGQ2ZmUiLCJpYXQiOjE3MDkyODQ3NzAsImV4cCI6MTcxMDQ5NDM3MH0.F27xMaXhbFyXm1yxF8QawTp0JVYznaozM8mB8ivvnlE";

const url = "https://striveschool-api.herokuapp.com/api/product/" + id;

fetch(url, {
  method: "GET",
  headers: {
    Authorization: apiKey,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 400) {
        throw new Error("400 - Errore lato client");
      }
      if (response.status === 404) {
        throw new Error("404 - Dato non trovato");
      }
      if (response.status === 500) {
        throw new Error("500 - Errore lato server");
      }
      throw new Error("Errore nel reperimento dati");
    }
  })
  .then((product) => {
    crea(product.imageUrl, product.name, product.description, product.price);
  })
  .catch((err) => console.log(err));
