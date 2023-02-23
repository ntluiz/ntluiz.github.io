const login = document.getElementById('login');
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;

login.addEventListener("click", function () {
    if (email === 'ntluiz' || senha === '0309') {
        document.location.href = 'https://ntluiz.github.io/estante.html';
    }
    else {
        alert("Erro!");;
    };
});