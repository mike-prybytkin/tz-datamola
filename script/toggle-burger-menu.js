const clickLinksListener = (linksContainer, burgerButton) => {
  linksContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
      linksContainer.classList.remove('is-active');
      burgerButton.classList.remove('is-active');
    }
  });
};

const toggleBurgerMenu = () => {
  const burgerButton = document.querySelector('.nav-button_toggle-menu');
  const nav = document.querySelector('.nav');
  clickLinksListener(nav, burgerButton);
  burgerButton.addEventListener('click', () => {
    nav.classList.toggle('is-active');
    burgerButton.classList.toggle('is-active');
  });
};

export default toggleBurgerMenu;
