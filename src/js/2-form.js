const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const getLocalStorageValue = () => {
  let formData = {};
  const localStorageValue = localStorage.getItem(localStorageKey);
  if (localStorageValue) {
    formData = JSON.parse(localStorageValue);
  }

  return { formData };
};

const formValues = getLocalStorageValue().formData;

form.addEventListener('input', evt => {
  formValues[evt.target.name] = evt.target.value.trim('');

  const userDataString = JSON.stringify(formValues);
  localStorage.setItem(localStorageKey, userDataString);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (!formValues?.email || !formValues?.message) {
    alert('Please fill in all fields of the form!');
  } else {
    console.log(formValues);
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});

form.elements.message.value = formValues?.message || '';
form.elements.email.value = formValues?.email || '';
