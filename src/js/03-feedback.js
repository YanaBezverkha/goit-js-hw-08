import throttle from 'lodash.throttle';
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const formEl = document.querySelector('.feedback-form');
const { email, message } = formEl;

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

function onInput() {
  const formValue = { email: email.value, message: message.value };
  save('feedback-form-state', formValue);
}

function onSubmit(event) {
  if(email.value !== "" && message.value !== ""){
  event.preventDefault();
  const formValue = load('feedback-form-state');
  localStorage.removeItem('feedback-form-state');
  console.log(formValue);
  formEl.reset();}
}

if (load('feedback-form-state')) {
  const formValue = load('feedback-form-state');
  email.value = formValue.email;
  message.value = formValue.message;
}