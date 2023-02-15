var title = document.getElementById("title").value;
var last = document.getElementById("last").value;

let url = 'https://api.sheety.co/3f2b4c50b08e3901f43d14db1494fa21/teste/log';
let body = {
  log: {
    title: title,
    last: last
  }
}
fetch(url, {
  method: 'POST',
  body: JSON.stringify(body)
})
  .then((response) => response.json())
  .then(json => {
    // Do something with object
    console.log(json.log);
  });