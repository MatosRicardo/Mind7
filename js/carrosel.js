function trocarClasse() {
    let item1 = document.getElementById("section1");
    let item2 = document.getElementById("section2");

    if (item1.classList.contains("carrosel-item-1-ative")) {

        item1.classList.remove("carrosel-item-1-ative");
        item1.classList.add("carrosel-item-1-desative");
        item2.classList.remove("carrosel-item-2-desative");
        item2.classList.add("carrosel-item-2-ative");

    } else {
        item2.classList.add("carrosel-item-2-desative");
        item2.classList.remove("carrosel-item-2-ative");
        item1.classList.add("carrosel-item-1-ative");
        item1.classList.remove("carrosel-item-1-desative");

    }
}
setInterval(trocarClasse, 10000);