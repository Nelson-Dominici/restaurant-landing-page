let abrir = document.getElementById("abrirMenuB")
let fechar = document.getElementById("fechar")
let voltar = document.querySelector("#voltar")
let menu = document.getElementById("menu")

function abrirMenu() {
    menu.style.width = "170px"
}

function fecharMenu() {
    menu.style.width = "0px"
}


abrir.addEventListener("click", abrirMenu);
fechar.addEventListener("click", fecharMenu);
