


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
    speed:400,
    spaceBetween:50,
    slidesPerView:4,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 50
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 40
          }

    }
  });