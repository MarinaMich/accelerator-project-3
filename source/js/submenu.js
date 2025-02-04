const linksSubList = Array.from(document.querySelectorAll('.menu__link--sublist'));

linksSubList.forEach((linkSubList) => {
  linkSubList.addEventListener('click', (e) => {
    e.target.closest('.menu__item').classList.toggle('menu__item--open');
  });
});
