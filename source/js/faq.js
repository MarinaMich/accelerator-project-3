const faqList = document.querySelector('.faq__list');
const faqItems = faqList.querySelectorAll('.faq__item');

const itemHandler = (evt) => {
  evt.preventDefault();
  const item = evt.currentTarget;
  if(item.classList.contains('faq__item--open')) {
    item.classList.remove('faq__item--open');
  } else {
    item.classList.add('faq__item--open');
  }
};

faqItems.forEach((item) => {
  item.addEventListener('click', itemHandler);
});
