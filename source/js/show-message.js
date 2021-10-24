'use strict';

const main = document.querySelector('.main');
const templeSuccess = document.querySelector('#success').content;
const messageSuccess = templeSuccess.querySelector('.success');

const newElementSuccess = messageSuccess.cloneNode(true);
main.appendChild(newElementSuccess);

const successMessageClickHandler = () => {
  newElementSuccess.classList.remove('success--show');
  document.removeEventListener('click', successMessageClickHandler);
};

const successMessageEscHandler = () => {
  newElementSuccess.classList.remove('success--show');
  document.removeEventListener('keydown', successMessageEscHandler);
};

const getShowSuccessMessage = () => {
  newElementSuccess.classList.add('success--show');

  document.addEventListener('click', successMessageClickHandler);
  document.addEventListener('keydown', successMessageEscHandler);
};

export { getShowSuccessMessage };
