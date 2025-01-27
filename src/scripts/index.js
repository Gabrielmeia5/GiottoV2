import { clickHandler } from './btns.js'
import { initializeAnimations } from "./animations.js";
import { swiperAdd } from "./swiper.js";
import { menuNavegation, wineListNavegation, subWineListNavegation } from "./app.js";


initializeAnimations();
swiperAdd()

document.getElementById("btn_mobile").addEventListener("change", (e) => {
    clickHandler(e)
});

document.querySelectorAll('.checkbox-menu').forEach(e => {
  e.addEventListener('change', menuNavegation);
});

document.querySelectorAll('.checkbox-wine').forEach(e => {
  e.addEventListener('change', wineListNavegation);
});

document.querySelectorAll('.checkbox-sub-wine').forEach(e => {
  e.addEventListener('change', subWineListNavegation);
});

document.querySelector('.menu-btn-mobile').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/16U_08lhHh4ntFFTMB8AxjrUzyl64oMU_/view', '_blank');
})

document.querySelector('.wine-btn-mobile').addEventListener('click', () => {
  window.open('https://drive.google.com/file/d/1RLnUO11vOKu2zZjh0vRE75e_IJ7zJM38/view', '_blank');
})