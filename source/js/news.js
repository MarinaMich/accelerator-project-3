import Swiper from 'swiper/bundle';
import {Navigation, Pagination, Keyboard} from 'swiper/modules';

const tabs = new Swiper('.tabs', {
  modules: [Keyboard],
  loop: false,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
});

export {tabs};
