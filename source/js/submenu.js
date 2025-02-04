const linksSubList = Array.from(document.querySelectorAll('.menu__link--sublist'));

linksSubList.forEach((linkSubList) => {
  linkSubList.addEventListener('click', (e) => {
    e.target.closest('.menu__item').classList.toggle('menu__item--open');
    const menuSubitem = linkSubList.nextElementSibling;
    const linksSubitem = Array.from(menuSubitem.querySelectorAll('.menu__link'));

    if(e.target.closest('.menu__item').classList.contains('menu__item--open')) {
      linksSubitem.forEach((link) => {
        link.setAttribute('tabindex', '0');
      });
      linksSubitem[0].focus();
      linkSubList.style.opacity = '0.9';
    } else {
      linksSubitem.forEach((link) => link.setAttribute('tabindex', '-1'));
      linkSubList.style.opacity = '0.7';
    }
  });
});
