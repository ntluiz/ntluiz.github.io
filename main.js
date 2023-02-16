fetch('https://sheetdb.io/api/v1/aux5lgr4vfrx2?sort_by=id&sort_order=asc&cast_numbers=last')
  .then((response) => response.json())
  .then((data) => console.log(data));

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