export const createObserver = (showClass) => 
  new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(showClass);
      } else {
        entry.target.classList.remove(showClass);
      }
    });
  });

const animationMap = [
  { selector: '.hiddenRtoL', showClass: 'showRtoL' },
  { selector: '.hiddenLtoR', showClass: 'showLtoR' },
  { selector: '.hiddenBtoT', showClass: 'showBtoT' },
  { selector: '.hiddenTtoB', showClass: 'showTtoB' },
  { selector: '.hiddenDiagonal', showClass: 'showDiagonal' },
];

export const initializeAnimations = () => {
  animationMap.forEach(({ selector, showClass }) => {
    const elements = document.querySelectorAll(selector);
    const observer = createObserver(showClass);

    elements.forEach((element) => {
      // Defina o tempo de transição personalizado usando `data-animation-duration`
      const animationDuration = element.dataset.animationDuration;
      if (animationDuration) {
        element.style.setProperty('--animation-duration', animationDuration);
      }

      observer.observe(element);
    });
  });
};
