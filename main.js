const myList = document.getElementById('list');
const select = document.getElementById("idup");

const dateup = document.getElementById("dateup");
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds()
var date = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;
dateup.value = date;

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
      option.textContent = prod.title;
      select.append(
        option,
      );
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

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
      document.getElementById("dateinput").value =
        date;
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
  var urlupdate = 'https://sheetdb.io/api/v1/aux5lgr4vfrx2/id/' + document.getElementById('idup').value;
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
        'date': dateup.value,
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

// Novel//

const myList2 = document.getElementById('novellist');
const select2 = document.getElementById("idupnovel");
const dateup2 = document.getElementById("dateupnovel");
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds()
var date2 = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;
dateup.value = date;

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=dados_novel")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const prod of data) {
      const option2 = document.createElement("option");
      option2.value = prod.id;
      option2.textContent = prod.title;
      select2.append(
        option2,
      );
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=novel")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {
      const cnovel = document.createElement("a");
      cnovel.className = "novel";
      cnovel.id = "n" + product.id;
      cnovel.href = product.link;
      cnovel.target = "_blank";
      const cimagen = document.createElement("div");
      cimagen.className = "image";
      cimagen.style.backgroundImage = "url(" + product.image + ")";
      const ctextn = document.createElement("div");
      ctextn.className = "text";
      const clastn = document.createElement("p");
      clastn.className = "last";
      clastn.textContent = product.last;
      const ctitlen = document.createElement("h3");
      ctitlen.className = "title";
      ctitlen.textContent = product.title;
      const cidn = document.createElement("h5");
      cidn.className = "id";
      cidn.textContent = product.id;
      const lidn = data.length + 2;
      document.getElementById("linkinputnovel").value =
        "=E" + lidn + "&" + "C" + lidn + "+1";
      document.getElementById("dateinputnovel").value =
        date2;
      ctext2.append(
        cidn, ctitlen,
      );
      cnovel.append(
        cimagen,
        ctextn,
        clastn,
      );

      myList2.appendChild(cnovel);
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

// Add

var form = document.getElementById('addnovel');
form.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form.action, {
    method: "POST",
    body: new FormData(document.getElementById("addnovel")),
  }).then(
    response => response.json()
  ).then((html) => {
    // you can put any JS code here
    alert('Ok!')
  });
});

// Update

var update = document.getElementById('updatenovel');

update.addEventListener("submit", e => {
  var urlupdate = 'https://sheetdb.io/api/v1/aux5lgr4vfrx2/id/' + document.getElementById('idupnovel').value;
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
        'last': document.getElementById('lastupnovel').value,
        'date': dateup2.value,
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