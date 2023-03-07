const myList = document.getElementById('list');
const select = document.getElementById("titleup");

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



fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=manga")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const prod of data) {
      const option = document.createElement("option");
      option.value = prod.title;
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
      const col = document.createElement("div");
      col.className = "col m-3";
      const cmanga = document.createElement("a");
      cmanga.className = "card";
      cmanga.id = "m" + product.id;
      cmanga.href = product.link;
      cmanga.target = "_blank";
      cmanga.style.backgroundImage = "url(" + product.image + ")";
      const ctext = document.createElement("div");
      ctext.className = "card-img-overlay d-flex justify-content-between align-items-baseline";
      const cspan = document.createElement("span");
      cspan.id = "s" + product.id;
      cspan.className = "position-absolute top-0 start-100 translate-middle badge bg-danger";
      const clast = document.createElement("h5");
      clast.className = "card-title last";
      clast.textContent = product.last;
      const cid = document.createElement("h5");
      cid.className = "id";
      cid.textContent = product.id;
      const lid = data.length + 2;
      document.getElementById("linkinput").value =
        "=E" + lid + "&" + "C" + lid + "+1";
      document.getElementById("dateinput").value =
        date;
      ctext.append(
        clast,
      );
      cmanga.append(
        ctext, cspan,
      );
      col.append(
        cmanga,
      );
      myList.appendChild(col);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var ok = this.responseText.indexOf("Chapter " + product.last + 1);
          if (ok > 1) {
            document.getElementById("s" + product.id).innerText = "New!";
          } else {
            document.getElementById("s" + product.id).innerText = "";
          }
        }
      };
      xhttp.open("GET", product.site, true);
      xhttp.send();

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
  var urlupdate = 'https://sheetdb.io/api/v1/aux5lgr4vfrx2/title/' + document.getElementById('titleup').value;
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
const select2 = document.getElementById("titleupnovel");
const dateup2 = document.getElementById("dateupnovel");
var dataAtual = new Date();
var dia = dataAtual.getDate();
var mes = (dataAtual.getMonth() + 1);
var ano = dataAtual.getFullYear();
var horas = dataAtual.getHours();
var minutos = dataAtual.getMinutes();
var segundos = dataAtual.getSeconds()
var date2 = dia + "/" + mes + "/" + ano + " " + horas + ":" + minutos + ":" + segundos;
dateup2.value = date;

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=dadosnovel")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const prodn of data) {
      const option2 = document.createElement("option");
      option2.value = prodn.title;
      option2.textContent = prodn.title;
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
    for (const productn of data) {
      const coln = document.createElement("div");
      coln.className = "col m-3";
      const cnovel = document.createElement("a");
      cnovel.className = "card";
      cnovel.id = "n" + productn.id;
      cnovel.href = productn.link;
      cnovel.target = "_blank";
      cnovel.style.backgroundImage = "url(" + productn.image + ")";
      const ctextn = document.createElement("div");
      ctextn.className = "card-img-overlay d-flex justify-content-between align-items-baseline";
      const clastn = document.createElement("h5");
      clastn.className = "card-title last";
      clastn.textContent = productn.last;
      const ciconn = document.createElement("i");
      ciconn.className = "fa-solid fa-bars";
      const cidn = document.createElement("h5");
      cidn.className = "id";
      cidn.textContent = productn.id;
      const lidn = data.length + 2;
      document.getElementById("linkinputnovel").value =
        "=E" + lidn + "&" + "C" + lidn + "+1";
      document.getElementById("dateinputnovel").value =
        date2;

      ctextn.append(
        clastn, ciconn,
      );
      cnovel.append(
        ctextn,
      );
      coln.append(
        cnovel,
      );

      myList2.appendChild(coln);
    }
  })
  .catch((error) => {
    console.log(`Error: ${error.message}`);
  });

// Add

var form2 = document.getElementById('addnovel');
form2.addEventListener("submit", e => {
  e.preventDefault();
  fetch(form2.action, {
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

var update2 = document.getElementById('updatenovel');

update2.addEventListener("submit", e => {
  var urlupdate2 = 'https://sheetdb.io/api/v1/aux5lgr4vfrx2?sheet=dadosnovel/title/' + document.getElementById('titleupnovel').value;
  console.log(urlupdate2);
  e.preventDefault();
  fetch(urlupdate2, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      data: {
        'last': document.getElementById('lastupnovel').value,
        'date': document.getElementById("dateupnovel").value,
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
