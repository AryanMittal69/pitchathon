const submitBtn = document.getElementById('submitBtn');
const backBtn = document.getElementById('backBtn');
const formContainer = document.getElementById('formContainer');
const thankyouContainer = document.getElementById('thankyouContainer');

submitBtn.addEventListener('click', () => {
  formContainer.style.display = 'none';
  thankyouContainer.style.display = 'block';
});

backBtn.addEventListener('click', () => {
  thankyouContainer.style.display = 'none';
  formContainer.style.display = 'block';
});
