function clickMenu() {

    if (itens.style.display == "block") {
        itens.style.display = "none"
    }
    else {
        itens.style.display = "block"
    }
}

function monitorarTamanho() {
    if (window.innerWidth >= 768) {
        itens.style.display = "inline-block"
    }
    else {
        itens.style.display = "none"
    }
}