const [navElement] = document.getElementsByClassName('nav');
const [navSwitchElement] = document.getElementsByClassName('nav__switch');

function navSwitchClickHandler() {
  navElement.classList.toggle('nav--expanded');
}

navSwitchElement.addEventListener('click', navSwitchClickHandler);
