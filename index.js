const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted!');
});