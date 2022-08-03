import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

// Track the input event on the form

checkInputData();
feedbackForm.addEventListener('input', throttle(enteredData, 500));
feedbackForm.addEventListener('submit', submitData);

// Writing to the local storage of the email and message fields, which store the current values of the form fields

function enteredData() {
  const input = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(input));
}

// When the page loads, check the state of the repository. If there is saved data, then fill in the form fields with them

function checkInputData() {
  const returnedData = localStorage.getItem('feedback-form-state');
  if (returnedData) {
    emailInput.value = JSON.parse(returnedData).email;
    messageInput.value = JSON.parse(returnedData).message;
  }
}

// When submitting a form, clear the storage and form fields. Output an object with fields email, message and their current values to the console

function submitData(e) {
  e.preventDefault();
  console.log(localStorage.getItem('feedback-form-state'));

  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
}
