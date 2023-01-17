const toogleTheme = () => {
  const themeButton = document.querySelector('.nav-button_toggle-theme');
  const body = document.querySelector('.body');
  themeButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
  });
};

export default toogleTheme;
