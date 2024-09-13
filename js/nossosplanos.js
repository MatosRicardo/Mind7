function funcaoAtivarModalBasic(){

    let modal = document.getElementById("modal_basic")

    document.querySelector("main").classList.add("fundo-ofuscado")
    document.querySelector("body").style.overflow="hidden"

    modal.classList.remove("modal-cards-desative")
    modal.classList.add("modal-cards-ative")
}

function funcaoAtivarModalAdvanced(){

    let modal = document.getElementById("modal_advanced")

    document.querySelector("main").classList.add("fundo-ofuscado")
    document.querySelector("body").style.overflow="hidden"

    modal.classList.remove("modal-cards-desative")
    modal.classList.add("modal-cards-ative")
}

function funcaoAtivarModalPremium(){

    let modal = document.getElementById("modal_premium")

    document.querySelector("main").classList.add("fundo-ofuscado")
    document.querySelector("body").style.overflow="hidden"

    modal.classList.remove("modal-cards-desative")
    modal.classList.add("modal-cards-ative")
}

function funcaoDesativarModalBasic(){

    let modal = document.getElementById("modal_basic")

    document.querySelector("main").classList.remove("fundo-ofuscado")
    document.querySelector("body").style.overflow="auto"

    modal.classList.add("modal-cards-desative")
    modal.classList.remove("modal-cards-ative")
}

function funcaoDesativarModalAdvanced(){

    let modal = document.getElementById("modal_advanced")

    document.querySelector("main").classList.remove("fundo-ofuscado")
    document.querySelector("body").style.overflow="auto"

    modal.classList.add("modal-cards-desative")
    modal.classList.remove("modal-cards-ative")
}

function funcaoDesativarModalPremium(){

    let modal = document.getElementById("modal_premium")

    document.querySelector("main").classList.remove("fundo-ofuscado")
    document.querySelector("body").style.overflow="auto"

    modal.classList.add("modal-cards-desative")
    modal.classList.remove("modal-cards-ative")
}