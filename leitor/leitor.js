const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const up = document.getElementById("top");
const scroll = document.getElementById("scroll");
const title = document.getElementById("title");
const input = document.getElementById("chapter");
const ok = document.getElementById("ok");


plus.addEventListener("click", function pageScroll() {
    scroll.scrollBy(0, 15);
    scrolldelay = setTimeout(pageScroll, 5000);
});
minus.addEventListener("click", function () {
    clearTimeout(scrolldelay);
});
up.addEventListener("click", function () {
    document.getElementById("scroll").scrollTo(0, 0);
    document.getElementById("scroll").scrollBy(0, 0);
});
ok.addEventListener("click", function () {
    var url = "https://freewebnovel.com/tyranny-of-steel/chapter-300.html";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var title1 = document.querySelector('[property="og:novel:chapter_name"]');
            document.getElementById("hide").innerHTML = xhttp.response;
            var filhos = document.querySelector(".txt").childNodes.length - 3;
            for (var i = 5; i < filhos; i++) {
                var teste = document.createElement("p");
                teste.innerHTML = document.querySelector(".txt").childNodes[i].innerText;
                scroll.append(teste);
            }
            // console.log();
            title1.innerHTML = document.querySelector('[property="og:novel:chapter_name"]').content;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
});
