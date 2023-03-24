const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const up = document.getElementById("top");
const sizeup = document.getElementById("sizeup");
const scroll = document.getElementById("scroll");
const title = document.getElementById("title");
const input = document.getElementById("chapter");
const ok = document.getElementById("ok");

Object.defineProperty(window, 'mobile', {
    get() {
        return window.innerWidth <= 425;
    }
})
plus.addEventListener("click", function pageScroll() {
    if (mobile) {
        window.scrollBy(0, 50);
        scrolldelay = setTimeout(pageScroll, 5000);
    } else {
        window.scrollBy(0, 20);
        scrolldelay = setTimeout(pageScroll, 5000);
    }
});
minus.addEventListener("click", function () {
    clearTimeout(scrolldelay);
});
up.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
sizeup.addEventListener("click", function increaseFontSizeBy1px() {
    txt = document.getElementById("scroll");
    style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
    currentSize = parseFloat(style);
    txt.style.fontSize = currentSize + 1 + "px";
});

ok.addEventListener("click", function () {
    var url = "https://freewebnovel.com/tyranny-of-steel/chapter-" + input.value + ".html";
    const elements = document.getElementsByClassName("noveltext");
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("hide").innerHTML = xhttp.response;
            title.innerHTML = document.querySelector('[property="og:novel:chapter_name"]').content;
            console.log(document.querySelector('[property="og:novel:chapter_name"]'));
            console.log(document.querySelector("#txt"));
            var filhos = document.querySelector(".txt").childNodes.length - 3;
            for (var i = 5; i < filhos; i++) {
                var teste = document.createElement("p");
                teste.className = "noveltext"
                let x = document.querySelector(".txt").childNodes[i].innerText;
                if (x === undefined) {
                    teste.innerHTML = "";
                } else {
                    teste.innerHTML = document.querySelector(".txt").childNodes[i].innerText;
                }
                scroll.append(teste);
            }
            // console.log();

        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
});
