var title = document.getElementById("title").value;
var last = document.getElementById("last").value;

fetch('https://sheetdb.io/api/v1/58f61be4dda40', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    data: [
      {
        'id': "INCREMENT",
        'title': title,
        'last': last
      }
    ]
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch('https://sheetdb.io/api/v1/aux5lgr4vfrx2?sort_by=id&sort_order=asc&cast_numbers=last')
  .then((response) => response.json())
  .then((data) => console.log(data));