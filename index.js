// // Fetch

// // const URL = "https://striveschool-api.herokuapp.com/api/product/";

// // function call(chiamata) {
// //   fetch(`https://striveschool-api.herokuapp.com/api/product =[${chiamata}]`),
// //     {
// //       method: "GET",
// //       headres: {
// //         Authorization:
// //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOWRhMjRjNTllYzAwMTk5MGQ2ZmUiLCJpYXQiOjE3MDkyODQ3NzAsImV4cCI6MTcxMDQ5NDM3MH0.F27xMaXhbFyXm1yxF8QawTp0JVYznaozM8mB8ivvnlE",
// //       },
// //     };
// // }

// // console.log(URL);

const row = document.getElementsByClassName("row")[0];

function creaCard(immagine, title, Descrizione) {
  const col = document.createElement("div");
  row.appendChild(col);
  col.className = "col-6 col-md-3";

  /////////////////////////////////////////////////////////
  const card = document.createElement("div");
  col.appendChild(card);
  card.className = "card";
  card.style = "width: 15rem";

  //////////////////////////////////////////////////

  const img = document.createElement("img");
  card.appendChild(img);
  img.className = "card-img-top";
  img.src = immagine;

  //////////////////////////////////////////////////777

  const body = document.createElement("div");
  card.appendChild(body);
  card.className = "card-body";

  ///////////////////////////////////////////////////

  const h5 = document.createElement("h5");
  body.appendChild(h5);
  h5.className = "card-title";
  h5.textContent = title;

  ////////////////////////////////////////////////////

  const p = document.createElement("p");
  body.appendChild(p);
  p.className = "card-text";
  p.textContent = " Descrizione";

  /////////////////////////////////////////////////////

  const btnDettaglio = document.createElement("a");
  body.appendChild(btnDettaglio);
  btnDettaglio.className = "btn btn-primary";
  btnDettaglio.textContent = "Dettaglio";
  btnDettaglio.href = "./back-office.html";

  ///////////////////////////////////////////////

  const btnModifica = document.createElement("a");
  body.appendChild(btnModifica);
  btnModifica.className = "btn btn-success";
  btnModifica.textContent = "Modifica";
}

creaCard("...", "titolo", "descrizione");
creaCard("...", "titolo", "descrizione");
creaCard("...", "titolo", "descrizione");
