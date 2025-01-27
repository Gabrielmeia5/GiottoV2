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

document.querySelectorAll('.checkbox-wine').forEach(e => {
  e.addEventListener('change', wineListNavegation);
});

function wineListNavegation(element) {
  const dataElement = element.target.dataset.wine;
  const fatherElement = element.target.closest(`#${dataElement}Row`);

  // Adicionar Seleced a Label
  const labelSeleced = fatherElement.querySelector('.text-wine-nav');
  const iconCheckBox = fatherElement.querySelector('.icon-wine-nav');
  const sectionMobile = fatherElement.querySelector(`#${dataElement}Mobile`);

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



document.querySelectorAll('.checkbox-sub-wine').forEach(e => {
  e.addEventListener('change', subWineListNavegation);
});

function subWineListNavegation(event) {
  const checkbox = event.target;
  const dataElement = checkbox.dataset.subwine;
  const rowElement = checkbox.closest('.sub-wine-list-row');
  const table = document.querySelector(`#${dataElement}Mobile`);
  const labelSeleced = rowElement.querySelector('.text-sub-wine-nav');
  const iconSeleced = rowElement.querySelector('.icon-sub-wine-nav');

  if (checkbox.checked) {
    // Ativar: Mostrar a tabela, adicionar classes
    iconSeleced.classList.add('checked');
    labelSeleced.classList.add('selectSubNavWineList');
    table.classList.remove('hidden');
  } else {
    // Desativar: Ocultar a tabela, remover classes
    iconSeleced.classList.remove('checked');
    labelSeleced.classList.remove('selectSubNavWineList');
    table.classList.add('hidden');
  }
}

