const header = document.getElementById('cabeçalho');
const logo = document.getElementById('logo-coca');
const main = document.getElementById('conteudo-principal');
const body = document.getElementById('body');

function btnBurguer() {
    header.style.display = "none";
    main.style.display= "block"
    body.style.backgroundColor = "white";
    
}

function btnFechar() {
    header.style.display = "block";
    main.style.display = "none";
    body.style.backgroundColor = "red";
}