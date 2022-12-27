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

let time = 3000,
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

    switch (currentBannerIndex) {
        case 0:
            main.style.backgroundColor = '#DB3534';
            break;
        case 1:
            main.style.backgroundColor = "#292727";
            break;
    
        case 2:
            main.style.backgroundColor = 'green';
            break;
        default:
            break;
    }


}

function start() {
    setInterval(() => {
        /* Troca de Banner */
        nextBanner()
    }, time);
}
window.addEventListener('load', start)

