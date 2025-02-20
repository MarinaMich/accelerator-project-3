import Swiper from 'swiper';
import 'swiper/css/grid';
import {Navigation, Pagination, Keyboard, Grid} from 'swiper/modules';

// навигация
const tabs = new Swiper('.tabs', {
  loop: false,
  grabCursor: true,
  slidesPerView: 'auto',
  spaceBetween: 12,
  watchOverflow: true,
});

tabs.init();
if (document.documentElement.clientWidth >= 768) {
  tabs.destroy();
}

const tabsList = document.querySelectorAll('.tabs__item');

// определение текущего таба

const thisTab = (index) => {
  tabsList.forEach((tab) => tab.classList.remove('tabs__item--active'));
  tabsList[index].classList.add('tabs__item--active');
};

tabsList.forEach((item, index) => {
  item.addEventListener('click', () => {
    thisTab(index);
  });
});

// слайдер новостей

const news = new Swiper('.selection__slides', {
  modules: [Navigation, Pagination, Keyboard, Grid],
  grabCursor: true,
  direction: 'horizontal',
  slidesPerView: 1,
  autoHeight: false,
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
      if (document.documentElement.clientWidth >= 768) {
        this.slides.forEach((slide) => {
          slide.style.height = '350px';
        });
      }
      if (document.documentElement.clientWidth >= 1440) {
        this.slides.forEach((slide) => {
          slide.style.height = '400px';
          slide.style.width = '286px';
          if(slide.classList.contains('swiper-slide-active')) {
            slide.style.width = '604px';
          }
        });
      }

      // пагинация в блоке новости
      const pagination = document.querySelector('.selection__pagination');
      const bullets = pagination.querySelectorAll('.swiper-pagination-bullet');
      const COUNT = 4;

      for (let i = COUNT + 1; i <= bullets.length; i++) {
        const paginationBullet = document.querySelector(`[data-index="${i}"]`);
        paginationBullet.style.display = 'none';
      }
    },
    slideChange: function() {
      if (document.documentElement.clientWidth >= 1440) {
        this.slides.forEach((slide) => {
          const index = this.activeIndex;
          const currentSlide = this.slides[index];
          slide[index].style.width = '604px';
          if(!currentSlide) {
            slide.style.width = '286px';
          }
        });
      }
    },
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1440: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 32,
      grid: false,
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
      return '<button class="' + className + '" data-index=' + (index + 1) + '>' + (index + 1) + '</button>';
    },
  },
});

news.init();

const selectionPagination = document.querySelector('.selection__pagination');
const paginationBullets = selectionPagination.querySelectorAll('.swiper-pagination-bullet');
const SHOW_BULLETS_COUNT = 4;

const hideBulletsOnInit = () => {
  for (let i = SHOW_BULLETS_COUNT + 1; i <= paginationBullets.length; i++) {
    const paginationBullet = document.querySelector(`[data-index="${i}"]`);
    paginationBullet.style.display = 'none';
  }
};
const createBulletsId = (minId, maxId) => {
  const arrowBulletsId = [];
  for (let i = minId; i <= maxId; i++) {
    arrowBulletsId.push(i);
  }
  return arrowBulletsId;
};

// реализация ТЗ - Для каждого последующего слайда до предпоследнего, кнопки пагинации продолжают смещаться, показывая текущий слайд, два предыдущих и один следующий слайд.

const createShowBullets = (activeBullet) => {
  const showBullets = [];

  if (activeBullet < SHOW_BULLETS_COUNT) {
    for (let i = 1; i <= SHOW_BULLETS_COUNT; i++) {
      showBullets.push(i);
    }
  } else if (activeBullet === paginationBullets.length) {
    for (let i = activeBullet - 3; i <= paginationBullets.length; i++) {
      showBullets.push(i);
    }
  } else {
    for (let i = activeBullet - 2; i <= activeBullet + 1; i++) {
      showBullets.push(i);
    }
  }
  return showBullets;
};

// занесение невидных в данный момент буллетов в отдельный массив

const createHiddenBullets = (showBullets, allBullets) => {
  const hiddenBullets = allBullets.filter((bullet) => !showBullets.includes(bullet));
  return hiddenBullets;
};

// вывод активных буллетов

const showPagination = (bullets) => {
  bullets.forEach((bullet) => {
    const showBullet = document.querySelector(`[data-index="${bullet}"]`);
    showBullet.style.display = 'block';
  });
};

// скрытие неактивных буллетов

const hiddenPagination = (bullets) => {
  bullets.forEach((bullet) => {
    const hiddenBullet = document.querySelector(`[data-index="${bullet}"]`);
    hiddenBullet.style.display = 'none';
  });
};

// изменение встроенной пагинации

const changePagination = () => {
  const activeBullet = news.realIndex + 1;
  const showBullets = createShowBullets(activeBullet);
  const allBullets = createBulletsId(1, paginationBullets.length);
  const hiddenBullets = createHiddenBullets(showBullets, allBullets);

  showPagination(showBullets);
  hiddenPagination(hiddenBullets);
};

news.on('slideChange', changePagination);
window.addEventListener('resize', hideBulletsOnInit);
window.addEventListener('resize', changePagination);
