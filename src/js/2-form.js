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


form.addEventListener('input', evt => {
  const existingData = getLocalStorageValue().formData;
  existingData[evt.target.name] = evt.target.value.trim();

  const userDataString = JSON.stringify(existingData);
  localStorage.setItem(localStorageKey, userDataString);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  if (
    !getLocalStorageValue().formData?.email ||
    !getLocalStorageValue().formData?.message
  ) {
    alert('Please fill in all fields of the form!');
  } else {
    console.log({
      email: getLocalStorageValue().formData?.email,
      message: getLocalStorageValue().formData?.message,
    });
    localStorage.removeItem(localStorageKey);
    form.reset();
  }
});

form.elements.message.value = getLocalStorageValue().formData?.message || '';
form.elements.email.value = getLocalStorageValue().formData?.email || '';
