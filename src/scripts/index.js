import { clickHandler } from './btns.js'
import { initializeAnimations } from "./animations.js";
import { swiperAdd } from "./swiper.js";
initializeAnimations();
swiperAdd()

document.getElementById("btn_mobile").addEventListener("change", (e) => {
    clickHandler(e)
});



document.querySelectorAll('.checkbox-menu').forEach(e => {
  e.addEventListener('change', menuNavegation);
});

function menuNavegation(element) {
  const dataElement = element.target.dataset.menu;
  const rowElement = element.target.closest(`#${dataElement}Row`);

  // Adicionar Seleced a Label
  const labelSeleced = rowElement.querySelector('.text-menu-nav');
  const iconCheckBox = rowElement.querySelector('.icon-menu-nav');
  const sectionMobile = rowElement.querySelector(`#${dataElement}Mobile`);

    if (labelSeleced.classList.contains('selected')) {
      iconCheckBox.classList.remove('checked');
      labelSeleced.classList.remove('selected');
      sectionMobile.classList.add('hidden');
    } else {
      iconCheckBox.classList.add('checked');
      labelSeleced.classList.add('selected');
      sectionMobile.classList.remove('hidden');
    }
}