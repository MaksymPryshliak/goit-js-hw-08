import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  email: document.querySelector('.feedback-form input'),
};
const LOCALSTARAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onSubmitForm);
refs.form.addEventListener('input', throttle(onFormInputs, 500));

function onFormInputs() {
  const message = {
    email: refs.email.value,
    message: refs.textarea.value,
  };
  localStorage.setItem(LOCALSTARAGE_KEY, JSON.stringify(message));
}

function onSubmitForm(evt) {
  evt.preventDefault(),
    console.log({ email: refs.email.value, message: refs.textarea.value });
  refs.form.reset();
  localStorage.removeItem(LOCALSTARAGE_KEY);
}

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = load(LOCALSTARAGE_KEY);
if (storageData) {
  refs.email.value = storageData.email;
  refs.textarea.value = storageData.message;
}
