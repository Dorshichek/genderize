import {ELEMENTS_UI} from "./view.js";

const serverUrl = 'https://api.genderize.io';

ELEMENTS_UI.SEND_NAME.addEventListener('click', () => showGender(ELEMENTS_UI.INPUT_NAME.value));

function showGender(name) {
  event.preventDefault()
  if (!name) {
    return alert('Введите имя');
  } else {
    const url = `${serverUrl}?name=${name}`;
    const request = fetch(url);
    const promise = request.then((response) => response.json());
    promise.then((result) => alert(`${name}` + ' - ' + `${result.gender}`));
    ELEMENTS_UI.INPUT_NAME.value = '';
  }
}