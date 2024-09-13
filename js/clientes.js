document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container2', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 0,
        centeredSlides: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500, // Tempo em milissegundos entre cada slide
            disableOnInteraction: false, // Não desativa o autoplay após interação do usuário
        },
    });
});
