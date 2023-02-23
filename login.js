function Login() {
    var done=0;
    var usuario = document.getElementsById('name')[0].value;
    usuario=usuario.toLowerCase();
    var senha= document.getElementsById('senha')[0].value;
    senha=senha.toLowerCase();
    if (usuario=="ntluiz" && senha=="0309") {
      window.location="/estante.html";
      done=1;
    }
    if (done==0) { alert("Dados incorretos, tente novamente"); }
  }