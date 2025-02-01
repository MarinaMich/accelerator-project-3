const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper');
const headerLogo = document.querySelector('.header__logo');
const body = document.body;

menuButton.addEventListener('click', () => {
  if (menu.classList.contains('menu--closed')) {
    menu.classList.remove('menu--closed');
    menu.classList.add('menu--opened');
    if(window.innerWidth <= 767) {
      headerLogo.style.display = 'none';
    } else {
      headerLogo.style.display = 'block';
    }
    header.classList.add('overlay');
    headerWrapper.classList.add('header__wrapper--menu-open');
    //headerWrapper.style.justifyContent = 'center';
    body.classList.add('fixed');
  } else {
    menu.classList.add('menu--closed');
    menu.classList.remove('menu--opened');
    headerLogo.style.display = 'block';
    header.classList.remove('overlay');
    headerWrapper.classList.remove('header__wrapper--menu-open');
    //headerWrapper.style.justifyContent = 'space-between';
    body.classList.remove('fixed');
  }
});



