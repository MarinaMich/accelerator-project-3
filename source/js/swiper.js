//import Swiper from 'swiper';
import Swiper from 'swiper/bundle';
import {Navigation, Pagination, Keyboard, Scrollbar} from 'swiper/modules';
import {tabs, news} from './news.js';

// слайдер блока hero

const heroSlider = new Swiper('.show-hero', {
  modules: [Pagination, Keyboard],
  loop: true,
  grabCursor: true,
  autoHeight: true,
  pagination: {
    el: '.show-hero__pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    1440: {
      allowTouchMove: false,
    }
  },
  on: {
    // переопределяет место пагинации для каждого слайда
    activeIndexChange: function () {
      const index = this.activeIndex;
      const currentSlide = this.slides[index];
      const currentContent = currentSlide.querySelector('.show-hero__content');
      const control = currentContent.querySelector('.show-hero__control');
      const pagination = document.querySelector('.show-hero__pagination');
      const slider = document.querySelector('.hero__slider');

      // значения свойств блока show-hero__content
      let bottomContent = window.getComputedStyle(currentContent).bottom;
      bottomContent = parseInt(bottomContent, 10);
      let paddingTopControl = window.getComputedStyle(control).paddingTop;
      paddingTopControl = parseInt(paddingTopControl, 10);
      let paddingLeftControl = window.getComputedStyle(control).paddingLeft;
      paddingLeftControl = parseInt(paddingLeftControl, 10);
      if (document.documentElement.clientWidth >= 768) {
        const paddingLeft = (slider.getBoundingClientRect().width - 678) / 2;
        currentContent.style.left = `${paddingLeft}px`;
      }
      if (document.documentElement.clientWidth >= 1440) {
        const paddingLeft = (slider.getBoundingClientRect().width - 1240) / 2;
        currentContent.style.left = `${paddingLeft}px`;
      }

      // расчет положения пагинации
      const paginationHorisontally = (this.el.getBoundingClientRect().width - currentContent.getBoundingClientRect().width) / 2 + paddingLeftControl;
      const paginationVertically = currentContent.getBoundingClientRect().height + bottomContent - paddingTopControl * 2;
      // присваивание новых свойств
      pagination.style.bottom = `${paginationVertically}px`;
      pagination.style.left = `${paginationHorisontally}px`;
      if (document.documentElement.clientWidth >= 768) {
        const paginationLeft = (this.el.getBoundingClientRect().width - 678) / 2 + 20;
        pagination.style.left = `${paginationLeft}px`;
      }
      if (document.documentElement.clientWidth >= 1440) {
        const paginationLeft = (this.el.getBoundingClientRect().width - 1240) / 2 + 20;
        pagination.style.left = `${paginationLeft}px`;
      }
    }
  },
});

// слайдер программ

const typesPrograms = new Swiper('.types-programs', {
  modules: [Navigation, Scrollbar, Keyboard],
  loop: false,
  grabCursor: true,
  breakpoints: {
    768: {
      spaceBetween: 30,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerView: 2.13,
      scrollbar: {
        el: '.types-programs__scrollbar',
        draggable: true,
        dragSize: 324,
      },
    },
    1440: {
      slidesPerView: 'auto',
      spaceBetween: 32,
      scrollbar: {
        el: '.types-programs__scrollbar',
        draggable: true,
        dragSize: 392,
        snapOnRelease: true,
      },
    },
  },
  navigation: {
    prevEl: '.types-programs__button-prev',
    nextEl: '.types-programs__button-next',
  },
});

heroSlider.init();
typesPrograms.init();
tabs.init();
if (document.documentElement.clientWidth >= 768) {
  tabs.destroy();
}
news.init();
