const body = document.getElementById('body');
const iconeHamburguer = document.getElementById('icone-hamburguer');
const listaMenu = document.getElementById('container-opçoes');
const main = document.getElementById('main');

function btnHamburguer() {
    body.style.backgroundColor = "#DB3534";
    iconeHamburguer.style.display = 'none';
    listaMenu.style.display = 'block';
    main.style.display = 'none';
}

function btnFechar() {
    listaMenu.style.display = 'none';
    body.style.backgroundColor = "white";
    iconeHamburguer.style.display = 'block';
    main.style.display = 'block';
}