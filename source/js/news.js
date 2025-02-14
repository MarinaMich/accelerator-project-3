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
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 20,
  grid: {
    rows: 2,
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
    }
  }
});

export {tabs, news};
