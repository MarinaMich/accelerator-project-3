import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';

// слайдер блока hero

const heroSlider = new Swiper('.show-hero', {
  modules: [Navigation, Pagination, Keyboard],
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

heroSlider.init();
