const menu = document.querySelector('.menu');
const menuButton = document.querySelector('.menu__button');
const header = document.querySelector('.header');
const headerWrapper = document.querySelector('.header__wrapper');
const headerLogo = document.querySelector('.header__logo');
const body = document.body;

// Проверка, что клавиша Esc
const isEscapeKey = (evt) => evt.key === 'Escape';

// Закрытие меню по нажатию Esc
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    menu.classList.remove('menu--opened');
    menu.classList.add('menu--closed');
    headerLogo.style.display = 'block';
    header.classList.remove('overlay');
    headerWrapper.classList.remove('header__wrapper--menu-open');
    body.classList.remove('fixed');
    document.removeEventListener('keydown', onDocumentKeydown);
  }
};

// прячет логотип при развернутом меню при ширене вьюпорта меньше 350px
const showLogo = () => {
  if(window.innerWidth <= 767) {
    headerLogo.style.display = 'none';
  } else {
    headerLogo.style.display = 'block';
  }
};

const openMenu = () => {
  menu.classList.remove('menu--closed');
  menu.classList.add('menu--opened');
  showLogo();
  header.classList.add('overlay');
  headerWrapper.classList.add('header__wrapper--menu-open');
  body.classList.add('fixed');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeMenu = () => {
  menu.classList.add('menu--closed');
  menu.classList.remove('menu--opened');
  headerLogo.style.display = 'block';
  header.classList.remove('overlay');
  headerWrapper.classList.remove('header__wrapper--menu-open');
  body.classList.remove('fixed');
  document.removeEventListener('keydown', onDocumentKeydown);
};

// взаимодействие с меню через кнопку
menuButton.addEventListener('click', () => {
  if (menu.classList.contains('menu--closed')) {
    openMenu();
  } else {
    closeMenu();
  }
});

// закрытие меню через клик по любому месту экрана, кроме навигации
document.addEventListener('click', (e) => {
  if(!e.target.closest('.menu--opened')) {
    closeMenu();
  }
});
