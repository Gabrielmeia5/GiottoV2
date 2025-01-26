export function swiperAdd() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'fade',
    
        autoplay: {
          delay: 7000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
      const swiperSuggestion = new Swiper('.swiper-suggestions', {
        loop: false,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}




