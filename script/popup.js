import EDUCATION_LIST from './education-list.js';

const prepareTemplate = (cardId) => {
  const cardData = EDUCATION_LIST.find((data) => data.id === cardId);
  const template = `
    <h3>
      <i class="fa fa-hand-pointer-o"></i>
      <a class="link" href=${cardData.link} title=${cardData.skill} target=_blank>${cardData.skill}</a>
    </h3>
    <img src=${cardData.sertificate} alt=${cardData.skill} title=${cardData.skill}>
    `;
  return template;
};

const openPopup = (event, popup, popupContent) => {
  const cardButtonId = event.target.parentNode.dataset.skill;
  popupContent.innerHTML = prepareTemplate(cardButtonId);
  popup.classList.add('open');
};

const closePopup = (popup) => {
  popup.classList.remove('open');
}

const popup = () => {
  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup__content');
  const skillCardsButtons = document.querySelectorAll('.card__button');
  const closePopupButton = document.querySelector('.popup__close');

  skillCardsButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      openPopup(event, popup, popupContent);
    });
  });

  popup.addEventListener('click', () => closePopup(popup));
  popupContent.addEventListener('click', (event) => event.stopPropagation());
  closePopupButton.addEventListener('click', () => closePopup(popup));
};

export default popup;
