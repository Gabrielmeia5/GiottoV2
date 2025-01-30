let swiperInstance = null;
let swiperSuggestionInstance = null;
let swiperSuggestionDesktopInstance = null;
let swiperAssessmentsInstance = null;

function handleScreenChange() {
  if (window.innerWidth < 1024) {
    // Destruir instâncias existentes
    if (swiperSuggestionDesktopInstance) {
      swiperSuggestionDesktopInstance.destroy(true, true);
      swiperSuggestionDesktopInstance = null;
    }

    // Adicionar classe para mobile
    document.getElementById('swiperSuggestions').classList.remove('swiper-suggestions-desktop');
    document.getElementById('swiperSuggestions').classList.add('swiper-suggestions');

    // Inicializar Swiper para mobile
    if (!swiperSuggestionInstance) {
      swiperSuggestionInstance = new Swiper('.swiper-suggestions', {
        loop: false,
        effect: 'fade', // Efeito de fade para mobile
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
  } else {
    // Destruir instâncias existentes
    if (swiperSuggestionInstance) {
      swiperSuggestionInstance.destroy(true, true);
      swiperSuggestionInstance = null;
    }

    // Adicionar classe para desktop
    document.getElementById('swiperSuggestions').classList.remove('swiper-suggestions');
    document.getElementById('swiperSuggestions').classList.add('swiper-suggestions-desktop');

    // Inicializar Swiper para desktop (sem efeito coverflow)
    if (!swiperSuggestionDesktopInstance) {
      swiperSuggestionDesktopInstance = new Swiper('.swiper-suggestions-desktop', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3, // Mostra 3 slides
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
        // Removido o efeito coverflow
      });
    }
  }
}

// Executa a função quando a página é carregada
window.addEventListener('load', handleScreenChange);

// Executa a função quando o tamanho da tela é alterado
window.addEventListener('resize', handleScreenChange);

export function swiperAdd() {
  swiperInstance = new Swiper('.swiper', {
    loop: true,
    effect: 'fade', // Efeito de fade para o Swiper principal
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

  swiperAssessmentsInstance = new Swiper('.swiper-assessments', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3, // Mostra 3 slides
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
    // Removido o efeito coverflow
  });
}