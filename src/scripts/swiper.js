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

      const swiperSuggestionDesktop = new Swiper('.swiper-suggestions-desktop', {
        grabCursor: true,
        centeredSlides: true,
        effect: 'coverFlow',
        slidesPerView: 3, // Mostra 3 slides (um no centro e dois nas laterais)
        loop: true, // Ativa o loop infinito
        spaceBetween: 30, // Espaçamento entre os slides
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slideActiveClass: 'swiper-slide-active', // Classe para o slide ativo
        slideNextClass: 'swiper-slide-next', // Classe para o próximo slide
        slidePrevClass: 'swiper-slide-prev', // Classe para o slide anterior
        
      });

      
}




