import { clickHandler } from './btns.js'
import { initializeAnimations } from "./animations.js";
initializeAnimations();


document.getElementById("btn_mobile").addEventListener("change", (e) => {
    clickHandler(e)
});


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