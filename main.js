const manga = document.getElementsByClassName('manga');
const list = $(".list");
const editadd = document.getElementById('editadd');
const editupdate = document.getElementById('editupdate');

const myList = document.getElementById('list');
const select = document.getElementById("idup");

const dateup = document.getElementById("dateup");
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var date = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":00";
dateup.value = date;

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=manga")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {
      const cmanga = document.createElement("a");
      cmanga.className = "manga";
      cmanga.id = "m" + product.id;
      cmanga.href = product.link;
      cmanga.target = "_blank";
      const cimage = document.createElement("div");
      cimage.className = "image";
      cimage.style.backgroundImage = "url(" + product.image + ")";
      const ctext = document.createElement("div");
      ctext.className = "text";
      const clast = document.createElement("p");
      clast.className = "last";
      clast.textContent = product.last;
      const ctitle = document.createElement("h3");
      ctitle.className = "title";
      ctitle.textContent = product.title;
      const cid = document.createElement("h5");
      cid.className = "id";
      cid.textContent = product.id;
      const lid = data.length + 2;
      document.getElementById("linkinput").value =
        "=E" + lid + "&" + "C" + lid + "+1";
      ctext.append(
        cid, ctitle,
      );
      cmanga.append(
        cimage,
        ctext,
        clast,
      );

      myList.appendChild(cmanga);
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=dados")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const prod of data) {
      const option = document.createElement("option");
      option.value = prod.id;
      option.textContent = prod.id + " - " + prod.title;
      select.append(
        option,
      );
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });
// Add

var form = document.getElementById('add');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("add")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('Ok!')
  });
});

// Update

var update = document.getElementById('update');

update.addEventListener("submit", e => {
  var urlupdate = 'https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=dados/id/' + document.getElementById('idup').value;
  console.log(urlupdate);
  e.preventDefault();
  fetch(urlupdate, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        'last': document.getElementById('lastup').value,
      }
    })
  })
    .then(
      response => response.json()
    ).then((html) => {
      // you can put any JS code here
      alert('Ok!')
    });
});

editadd.addEventListener("click", function () {
  if (editadd.classList.contains('collapsed')) {
    editadd.innerText = "Off";
  } else {
    editadd.innerText = "On";
  }
});

editupdate.addEventListener("click", function () {
  if (editupdate.classList.contains('collapsed')) {
    editupdate.innerText = "Off";
  } else {
    editupdate.innerText = "On";
  }
});