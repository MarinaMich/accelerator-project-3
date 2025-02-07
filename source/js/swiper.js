import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';

// слайдер блока hero

const heroSlider = new Swiper('.show-hero', {
  modules: [Pagination, Keyboard],
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.show-hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  on: {
    // переопределяет место пагинации для каждого слайда
    activeIndexChange: function () {
      const index = this.activeIndex;
      const currentSlide = this.slides[index];
      const currentContent = currentSlide.querySelector('.show-hero__content');
      const control = currentContent.querySelector('.show-hero__control');
      const pagination = document.querySelector('.show-hero__pagination');
      // значения свойств блока show-hero__content
      let bottomContent = window.getComputedStyle(currentContent).bottom;
      bottomContent = parseInt(bottomContent, 10);
      let paddingTopControl = window.getComputedStyle(control).paddingTop;
      paddingTopControl = parseInt(paddingTopControl, 10);
      let paddingLeftControl = window.getComputedStyle(control).paddingLeft;
      paddingLeftControl = parseInt(paddingLeftControl, 10);
      // расчет положения пагинации
      const paginationHorisontally = (this.el.getBoundingClientRect().width - currentContent.getBoundingClientRect().width) / 2 + paddingLeftControl;
      const paginationVertically = currentContent.getBoundingClientRect().height + bottomContent - paddingTopControl * 2;
      // присваивание новых свойств
      pagination.style.bottom = `${paginationVertically}px`;
      pagination.style.left = `${paginationHorisontally}px`;
    }
  },
});

heroSlider.init();
