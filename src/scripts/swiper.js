let swiperInstance = null;
let swiperSuggestionInstance = null;
let swiperSuggestionDesktopInstance = null;
let swiperAssessmentsInstance = null;
let isMobile = null; // Estado para verificar se a tela é mobile ou desktop

// Armazena referências aos elementos para evitar chamadas repetidas ao DOM
const swiperSuggestionsEl = document.getElementById('swiperSuggestions');
const swiperAssessmentsEl = document.getElementById('swiperAssessments');

function handleScreenChange() {
  const newIsMobile = window.innerWidth < 1024;
  if (newIsMobile === isMobile) return; // Evita recriação desnecessária
  isMobile = newIsMobile;

  if (isMobile) {
    // Destruir instâncias existentes no modo desktop
    if (swiperSuggestionDesktopInstance) {
      swiperSuggestionDesktopInstance.destroy(true, true);
      swiperSuggestionDesktopInstance = null;
    }
    if (swiperAssessmentsInstance) {
      swiperAssessmentsInstance.destroy(true, true);
      swiperAssessmentsInstance = null;
    }

    // Alternar classes para mobile
    swiperSuggestionsEl.classList.remove('swiper-suggestions-desktop');
    swiperSuggestionsEl.classList.add('swiper-suggestions');
    swiperAssessmentsEl.classList.remove('swiper-assessments-desktop');
    swiperAssessmentsEl.classList.add('swiper-assessments');

    // Inicializar Swipers para mobile
    if (!swiperSuggestionInstance) {
      swiperSuggestionInstance = new Swiper('.swiper-suggestions', {
        loop: false,
        effect: 'fade',
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    }

    if (!swiperAssessmentsInstance) {
      swiperAssessmentsInstance = new Swiper('.swiper-assessments', {
        loop: false,
        effect: 'fade',
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    }

  } else {
    // Destruir instâncias existentes no modo mobile
    if (swiperSuggestionInstance) {
      swiperSuggestionInstance.destroy(true, true);
      swiperSuggestionInstance = null;
    }
    if (swiperAssessmentsInstance) {
      swiperAssessmentsInstance.destroy(true, true);
      swiperAssessmentsInstance = null;
    }

    // Alternar classes para desktop
    swiperSuggestionsEl.classList.remove('swiper-suggestions');
    swiperSuggestionsEl.classList.add('swiper-suggestions-desktop');
    swiperAssessmentsEl.classList.remove('swiper-assessments');
    swiperAssessmentsEl.classList.add('swiper-assessments-desktop');

    // Inicializar Swipers para desktop
    if (!swiperSuggestionDesktopInstance) {
      swiperSuggestionDesktopInstance = new Swiper('.swiper-suggestions-desktop', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    }

    if (!swiperAssessmentsInstance) {
      swiperAssessmentsInstance = new Swiper('.swiper-assessments-desktop', {
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
      });
    }
  }
}

// Adiciona debounce para otimizar o evento resize
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(handleScreenChange, 200);
});

// Executa a função quando a página é carregada
window.addEventListener('load', handleScreenChange);

export function swiperAdd() {
  swiperInstance = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    autoplay: { delay: 7000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  });
}
