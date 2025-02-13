// создает нумерацию списка

const conditions = document.querySelector('.conditions');
const list = Array.from(conditions.querySelectorAll('.conditions__item'));

list.forEach((item, index) => {
  const number = document.createElement('span');
  item.append(number);
  number.textContent = index + 1;
  number.style.zIndex = '1';
  number.style.position = 'absolute';
  number.style.left = '-15px';
  number.style.top = '-5px';
  number.style.width = '32px';
  number.style.height = '32px';
  number.style.display = 'flex';
  number.style.alignItems = 'center';
  number.style.justifyContent = 'center';
  number.style.fontSize = '18px';
  number.style.lineHeight = '18px';
  number.style.fontWeight = '500';
  number.style.backgroundColor = '#316dc2';
});
