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

/* Troca de Banners */

let time = 10000,
    currentBannerIndex = 0,
    banners = document.querySelectorAll('#main div.bnn')
    max = banners.length;

function nextBanner() {

    currentBannerIndex++

    let banner = document.getElementById("selected");
    banner.removeAttribute('id','selected');

    if(currentBannerIndex >= max) {
        currentBannerIndex = 0;
    }

    console.log(currentBannerIndex)

    banners[currentBannerIndex].setAttribute('id','selected')

}

function start() {
    setInterval(() => {
        /* Troca de Banner */
        nextBanner()
    }, time);
}
window.addEventListener('load', start)