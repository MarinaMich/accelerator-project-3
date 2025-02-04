const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper');
const headerLogo = document.querySelector('.header__logo');
const body = document.body;

const showLogo = () => {
  if(window.innerWidth <= 767) {
    headerLogo.style.display = 'none';
  } else {
    headerLogo.style.display = 'block';
  }
};

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    showLogo();
    header.classList.add('overlay');
    headerWrapper.classList.add('header__wrapper--menu-open');
    body.classList.add('fixed');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    headerLogo.style.display = 'block';
    header.classList.remove('overlay');
    headerWrapper.classList.remove('header__wrapper--menu-open');
    body.classList.remove('fixed');
  }
});
