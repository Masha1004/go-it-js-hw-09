const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const textarea = form.elements.message;
const input = form.elements.email;

form.addEventListener('input', evt => {
  console.log(evt.target);
  // const formValues = {
  //   email: evt.target.elements.email.value,
  //   message: evt.target.elements.message.value,
  // };

  // console.log(formValues)
  //   localStorage.setItem(localStorageKey, evt.target.value);
});
