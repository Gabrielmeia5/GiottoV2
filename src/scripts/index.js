import { clickHandler } from './btns.js'
import { initializeAnimations } from "./animations.js";
import { swiperAdd } from "./swiper.js";
import { menuNavegation, menuNavegationDesktop, wineListNavegationMobile,wineListNavegationDesktop, subWineListNavegation, subWineListNavegationDesktop } from "./app.js";


initializeAnimations();
swiperAdd()

document.getElementById("btn_mobile").addEventListener("change", (e) => {
    clickHandler(e)
});

document.querySelectorAll('.checkbox-menu').forEach(e => {
  e.addEventListener('change', menuNavegation);
});

document.querySelectorAll('.checkbox-menu-desktop').forEach(e => {
  e.addEventListener('change', menuNavegationDesktop);
});

document.querySelectorAll('.checkbox-wine').forEach(e => {
  e.addEventListener('change', wineListNavegationMobile);
});

document.querySelectorAll('.checkbox-wine-desktop').forEach(e => {
  e.addEventListener('change', wineListNavegationDesktop);
});

document.querySelectorAll('.checkbox-sub-wine').forEach(e => {
  e.addEventListener('change', subWineListNavegation);
});

document.querySelectorAll('.checkbox-sub-wine-desktop').forEach(e => {
  e.addEventListener('change', subWineListNavegationDesktop);
});

document.querySelector('.menu-btn-mobile').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/16U_08lhHh4ntFFTMB8AxjrUzyl64oMU_/view', '_blank');
})

document.querySelector('.wine-btn-mobile').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1RLnUO11vOKu2zZjh0vRE75e_IJ7zJM38/view', '_blank');
})

document.querySelector('.winery-btn-mobile').addEventListener('click', () => {
  window.open('https://www.instagram.com/vinicolaalmarios/', '_blank');
})



document.addEventListener('DOMContentLoaded', function() {
  const imageContainers = document.querySelectorAll('.image-container');
  const overlay = document.getElementById('overlay');
  const fullImage = document.getElementById('full-image');
  const closeBtn = document.getElementById('close-btn');

  imageContainers.forEach(container => {
      const img = container.querySelector('img'); // Seleciona a imagem dentro da div
      container.addEventListener('click', function() {
          fullImage.src = img.src; // Define a imagem em tela cheia
          overlay.classList.add('active');
      });
  });

  closeBtn.addEventListener('click', function() {
      overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
          overlay.classList.remove('active');
      }
  });
});