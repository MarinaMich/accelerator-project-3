import Swiper from 'swiper';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';

// слайдер блока hero

const heroSlider = new Swiper('.hero__slider', {
  modules: [Navigation, Pagination, Keyboard],
  loop: true,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

heroSlider.init();
