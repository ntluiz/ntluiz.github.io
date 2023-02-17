const manga = document.getElementsByClassName('manga');
const list = $(".list");


const myList = document.getElementById('list');
const select = document.getElementById("idup");

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.id + " - " + product.title;
      const cmanga = document.createElement("div");
      cmanga.className = "manga";
      cmanga.id = "m" + product.id;
      cmanga.href = product.link;
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

      select.append(
        option,
      );
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