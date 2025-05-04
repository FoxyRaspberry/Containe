initNav();
initCarousel();

function initNav() {
  const [navElement] = document.getElementsByClassName('nav');
  const [navSwitchElement] = document.getElementsByClassName('nav__switch');

  function navSwitchClickHandler() {
    navElement.classList.toggle('nav--expanded');
  }

  navSwitchElement.addEventListener('click', navSwitchClickHandler);
}

function initCarousel() {
  let currentIndex = 0;
  const dotActiveModifier = `testimonials-section__dot--active`;
  const [cardListElement] = document.getElementsByClassName('testimonials-section__card-list');
  const [previousArrowElement] = document.getElementsByClassName('testimonials-section__previous-arrow');
  const [nextArrowElement] = document.getElementsByClassName('testimonials-section__next-arrow');
  const dotElements = document.getElementsByClassName('testimonials-section__dot');

  function previousArrowClickHandler() {
    if (currentIndex <= 0) {
      return;
    }
    dotElements[currentIndex].classList.remove(dotActiveModifier);
    currentIndex--;
    dotElements[currentIndex].classList.add(dotActiveModifier);

    const cardListMarginLeft = currentIndex*(-300);
    cardListElement.setAttribute('style', `margin-left: ${cardListMarginLeft}px`);
  }

  previousArrowElement.addEventListener('click', previousArrowClickHandler);

  function nextArrowClickHandler() {
    if (currentIndex >= 2) {
      return;
    }
    dotElements[currentIndex].classList.remove(dotActiveModifier);
    currentIndex++;
    dotElements[currentIndex].classList.add(dotActiveModifier);

    const cardListMarginLeft = currentIndex*(-300);
    cardListElement.setAttribute('style', `margin-left: ${cardListMarginLeft}px`);
  }

  nextArrowElement.addEventListener('click', nextArrowClickHandler);
}
