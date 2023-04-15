var swiper = new Swiper( '.swiper-container', {
    initialSlide: 0, 
    loop: true,
    autoHeight: true,
    height: 200,
    autoplay: {
        delay: 100,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});