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
      const pagination = document.querySelector('.show-hero__pagination');

      const paginationHorisontally = (this.el.getBoundingClientRect().width - 320) / 2 + 31;
      pagination.style.bottom = getComputedStyle(currentContent).height;
      pagination.style.left = `${paginationHorisontally}px`;
    }
  },
});

heroSlider.init();
