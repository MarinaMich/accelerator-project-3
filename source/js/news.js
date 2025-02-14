import Swiper from 'swiper/bundle';
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
  //grid: {
   // rows: 2,
    //fill: 'column',
 // },
  //slidesPerView: 2,
  //slidesPerGroup: 1,
});

export {tabs, news};
