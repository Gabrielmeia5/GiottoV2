export function menuNavegation(element) {

    const dataElement = element.target.dataset.menu;
    const rowElement = element.target.closest(`#${dataElement}Row`);

    console.log(rowElement)
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
        console.log(iconCheckBox)
        labelSeleced.classList.add('selected');
        sectionMobile.classList.remove('hidden');
      }
  }

  export function menuNavegationDesktop(element) {
    const dataElement = element.target.dataset.menu;
    const rowElement = element.target.closest(`#${dataElement}RowDesktop`);
    console.log('asd')
    const labelSeleced = rowElement.querySelector('.text-menu-nav');

    
    const sectionMobile = document.querySelector(`#${dataElement}Mobile`);


    document.querySelectorAll(`.text-menu-nav`).forEach(e => {
      e.classList.remove('selected');
    });
    labelSeleced.classList.add('selected');

    // Seleção de menu-list de acordo com a navegação
    document.querySelectorAll('.menu-section').forEach(e => {
      e.classList.add('hidden');
    });
    sectionMobile.classList.remove('hidden');

  }



export function subWineListNavegation(event) {
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


export function wineListNavegationMobile(element) {
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


  export function wineListNavegationDesktop(element) {
    const dataElement = element.target.dataset.wine;
    const rowElement = element.target.closest(`#${dataElement}RowDesktop`);
    console.log('asd')
    const labelSeleced = rowElement.querySelector('.text-wine-nav');

    
    const sectionMobile = document.querySelector(`#${dataElement}Mobile`);
    console.log(sectionMobile)


    document.querySelectorAll(`.text-wine-nav`).forEach(e => {
      e.classList.remove('selected');
    });
    labelSeleced.classList.add('selected');

    // Seleção de menu-list de acordo com a navegação
    document.querySelectorAll('.wine-list-section').forEach(e => {
      e.classList.add('hidden');
    });
    document.querySelectorAll('.sub-wine-list-desktop').forEach(e => {
      e.classList.add('hidden');
    });
    sectionMobile.classList.remove('hidden');
    if(dataElement !== 'glasses') {
      document.querySelector(`.sub-wine-list-${dataElement}-desktop`).classList.remove('hidden')
    } 
  }




export function subWineListNavegationDesktop(event) {
  const checkbox = event.target;
  const dataElement = checkbox.dataset.subwine;

  const rowElement = checkbox.closest('.sub-wine-list-row-desktop');
  const table = document.querySelector(`#${dataElement}Mobile`);
  const labelSeleced = rowElement.querySelector('.text-sub-wine-nav-desktop');


  const fatherTable = table.closest('.sub-wine-list-row')
  const grannyTable = table.closest('.wine-list-section')


  const wineSectionData = checkbox.dataset.winesection;
  const wineSection = document.querySelector(`.sub-wine-list-${wineSectionData}-desktop`)
  console.log(wineSection)

  wineSection.querySelectorAll(`.text-sub-wine-nav-desktop`).forEach(e => {
    e.classList.remove('selectSubNavWineList')
  });
  grannyTable.querySelectorAll('.sub-wine-list-row').forEach(e => {
    e.classList.add('hidden')
  })
  grannyTable.querySelectorAll('.table-sub-nav').forEach(e => {
    e.classList.add('hidden')
  })
  


    // Ativar: Mostrar a tabela, adicionar classes
    labelSeleced.classList.add('selectSubNavWineList');
    fatherTable.classList.remove('hidden');
    table.classList.remove('hidden')
  
}