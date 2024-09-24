function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '123456') {
        window.location = "index.html";
        logado = 1;
    }

    else if(logado == 0) {
        alert("acesso negado. Dados incorretos")
    }
}
