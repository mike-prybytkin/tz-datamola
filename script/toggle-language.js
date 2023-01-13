import i18Obj from './translate-data.js';

const textReplacement = (button) => {
  let currentLanguage = 'en';
  if (button.classList.contains('ru-lang')) {
    currentLanguage = 'ru';
  } else {
    currentLanguage = 'en';
  }
  const dataLanguage = document.querySelectorAll('[data-i18]');
  dataLanguage.forEach(
    (el) => (el.textContent = i18Obj[currentLanguage][el.dataset.i18])
  );
};

const toggleLanguage = () => {
  const switchButton = document.querySelector('.nav-button_toggle-lang');
  switchButton.addEventListener('click', () => {
    switchButton.classList.toggle('ru-lang');
    textReplacement(switchButton);
  });
};

export default toggleLanguage;
