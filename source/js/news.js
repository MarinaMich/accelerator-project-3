import Swiper from 'swiper/bundle';
import 'swiper/css/grid';
import {Navigation, Pagination, Keyboard, Grid} from 'swiper/modules';

// навигация
const tabs = new Swiper('.tabs', {
  loop: false,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
});

// слайдер новостей

const news = new Swiper('.selection__slides', {
  modules: [Navigation, Pagination, Keyboard, Grid],
  grabCursor: true,
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: false,
  //slidesPerColumn: 2,
 // slidesPerGroup : 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
    fill: 'column',
  },
  on: {
    init: function () {
      this.slides.forEach((slide, index) => {
        if(index % 2 === 0) {
          slide.style.height = '330px';
        } else {
          slide.style.height = '240px';
        }
      });
    },
  },

  navigation: {
    prevEl: '.selection__button-prev',
    nextEl: '.selection__button-next',
  },

  pagination: {
    el: '.selection__pagination',
    type: 'bullets',
    clickable: true,
    // Буллеты с нумерацией
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

export {tabs, news};
