'use strict';

import { sendData } from './api.js';
import { getShowSuccessMessage } from './show-message.js';
import { setModalInactiveState } from './modal.js';

const modal = document.querySelector('.modal');
const inputName = modal.querySelector('#name');
const inputEmail = modal.querySelector('#email');
const textarea = modal.querySelector('#message');
const errorMessages = modal.querySelectorAll('.error');

const getValidity = (id, index, message) => {
  if (id.value.trim() === '') {
    errorMessages[index].innerHTML = message;
    id.style.border = '1px solid red';
  } else {
    errorMessages[index].innerHTML = '';
    id.style.border = '1px solid green';
  }
};

const validityHandler = (evt) => {
  evt.preventDefault();

  getValidity(inputName, 0, 'Введите имя');
  getValidity(inputEmail, 1, 'Введите email');
  getValidity(textarea, 2, 'Введите сообщение');

  const isErrorsMessage = Array.from(errorMessages).every((value) => {
    return value.innerHTML === '';
  });

  if (isErrorsMessage) {
    sendData(getShowSuccessMessage, new FormData(evt.target));
    setModalInactiveState();
  }
};

export { validityHandler };
