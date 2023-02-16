const manga = document.getElementsByClassName('manga');
const list = $(".list");


const myList = document.getElementsByClassName('list');

fetch("https://sheetdb.io/api/v1/aux5lgr4vfrx2")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error, status = ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    for (const product of data) {
      const cmanga = document.createElement("div", { class: "manga", data: { index } });
      const cimage = document.createElement("div", { class: "image" });
      cimage.style.backgroundImage = product.image;
      const ctext = document.createElement("div", { class: "text" });
      const clast = document.createElement("p", { class: "last" });
      clast.textContent = product.last;
      const ctitle = document.createElement("h3", { class: "title" });
      ctitle.textContent = product.title;
      const cid = document.createElement("h5", { class: "id" });
      cid.textContent = product.id;

      cmanga.append(
        cimage,
        ctext.append(
          ctitle, cid
        ),
        clast,
      );
      myList.appendChild(cmanga);
    }
  })
  .catch((error) => {
    const p = document.createElement("p");
    p.appendChild(document.createTextNode(`Error: ${error.message}`));
    document.body.insertBefore(p, myList);
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
var urlupdate = 'https://sheetdb.io/api/v1/58f61be4dda40/title/' + document.getElementById('titleup').value;
update.addEventListener("submit", e => {
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