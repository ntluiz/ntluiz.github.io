const m1 = document.getElementById("m1");
const btn = document.getElementById("btn");
var last = document.getElementById("l1");

btn.addEventListener("click", function () {
  last.innerText = input.value;
});
m1.addEventListener("click", function () {
  var l1 = parseInt(document.getElementById("l1").innerText) + parseInt(1);
  document.location.href =
    "https://manhuaplus.com/manga/martial-peak/chapter-" + l1, "_blank/";
});
