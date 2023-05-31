const save = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error("Set state error: ", error.message);
    }
  };
  
  const load = key => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState === null ? undefined : JSON.parse(serializedState);
    } catch (error) {
      console.error("Get state error: ", error.message);
    }
  };


  const formEl = document.querySelector('.feedback-form');
  const {email, message} = formEl;

  formEl.addEventListener('input', onInput);
  formEl.addEventListener('submit', onSubmit);

function onInput(event){
const formValue = {email: email.value,
    message: message.value}
save('feedback-form-state', formValue)
}

if(load('feedback-form-state') != null){
const formValue = load('feedback-form-state');
email.value = formValue.email;
message.value = formValue.message;
}

function onSubmit(event){
event.preventDefault()
formEl.reset()
localStorage.removeItem('feedback-form-state')
}