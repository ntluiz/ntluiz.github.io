const m1 = document.getElementById("m1");
const btn = document.getElementById("btn");
var last = document.getElementById("l1");

btn.addEventListener("click", function () {
  last.innerText = input.value;
});
m1.addEventListener("click", function () {
  var l1 = parseInt(document.getElementById("l1").innerText) + parseInt(1);
  window.open('https://manhuaplus.com/manga/martial-peak/chapter-'+ l1, '_blank');
});

let url = 'https://api.sheety.co/3f2b4c50b08e3901f43d14db1494fa21/mangas/manga';
fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  console.log(json.manga);
});