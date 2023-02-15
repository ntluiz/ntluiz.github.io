fetch('https://sheetdb.io/api/v1/aux5lgr4vfrx2?sort_by=id&sort_order=asc&cast_numbers=last')
  .then((response) => response.json())
  .then((data) => console.log(data));