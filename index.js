const hamburger = document.querySelector('.material-icons');
const navbarItems = document.querySelector('.navbar-items');
const myLogo = document.querySelector('.logo');
const navbarItemLinks = document.querySelectorAll('.navbar-items li a');

hamburger.addEventListener('click', () => {
  toggleMenu();
});

navbarItemLinks.forEach((link) => {
  link.addEventListener('click', () => {
    toggleMenu();
  });
});

function toggleMenu() {
  if (hamburger.textContent === 'menu') {
    hamburger.textContent = 'close';
    navbarItems.style.display = 'block';
    myLogo.style.visibility = 'hidden';
  } else {
    hamburger.textContent = 'menu';
    navbarItems.style.display = 'none';
    myLogo.style.visibility = 'visible';
  }
}