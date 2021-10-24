const sendData = (onSuccess, body) => {
  fetch(
    'https://24.javascript.pages.academy',
    {
      method: 'POST',
      body,
    },
  )
  .then((response) => {
    if (response.ok) {
      onSuccess();
      return response;
    }

    throw new Error();
  })
  .catch((error) => error);
};

export { sendData };
