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