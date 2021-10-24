'use strict';

import { validityHandler } from './validity-form.js';

const modal = document.querySelector('.modal');
const page = document.querySelector('.page__body');
const form = modal.querySelector('.contacts__form');
const buttonForm = document.querySelector('.team__button');
const buttonClose = modal.querySelector('.contacts__close-button');
const inputNameFocused = modal.querySelector('#name');

const setModalActiveState = (evt) => {
  evt.preventDefault();
  if (modal) {
    modal.classList.toggle('modal--opened');
    page.classList.toggle('page__body--overflow');
    window.addEventListener('keydown', escapeHandler);
    modal.addEventListener('click', clickOverlayHandler);
    inputNameFocused.focus();
  }
  if (buttonClose) {
    buttonClose.addEventListener('click', closeButtonClickHandler);
  }
  if (form) {
    form.addEventListener('submit', validityHandler);
  }
};

const setModalInactiveState = () => {
  modal.classList.toggle('modal--opened');
  page.classList.toggle('page__body--overflow');
  window.removeEventListener('keydown', escapeHandler);
  modal.removeEventListener('click', clickOverlayHandler);
  buttonClose.removeEventListener('click', closeButtonClickHandler);
  form.removeEventListener('submit', validityHandler);
};

const escapeHandler = (evt) => {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    setModalInactiveState();
  }
};

const clickOverlayHandler = (evt) => {
  if (evt.target.classList.contains('modal')) {
    setModalInactiveState();
  }
};

const closeButtonClickHandler = () => {
  setModalInactiveState();
};

const initModalClickHandler = () => {
  if (buttonForm) {
    buttonForm.addEventListener('click', setModalActiveState);
  }
};

export { setModalInactiveState };
export { initModalClickHandler };
