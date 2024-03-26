
let screenWidth = document.documentElement.clientWidth;
const swiperWrapper = document.querySelector('.swiper-wrapper');
let mobileDevice = false, tableDevice = false, pcDevice = false;

if (screenWidth >= 768 && screenWidth < 1120) {
  tableDevice = true;
} else if (screenWidth >= 1120) {
  pcDevice = true;
} else {
  mobileDevice = true;
}

if (mobileDevice) {
  var swiper = new Swiper(".repair-brands__catalog--mySwiper", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    freeMode: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  swiperWrapper.classList.add('repair-brands__catalog--grid');
}

const showMoreBrands = document.querySelector('.repair-brands__show-more');
const showMoreBrandsText = document.querySelector('.repair-brands__show-more .show-more__text');
const showMoreBrandsIcon = document.querySelector('.repair-brands__show-more .show-more__icon');

const brandCardTableHidden = document.querySelectorAll('.brand-card--table-hidden');
const brandCardPcHidden = document.querySelectorAll('.brand-card--pc-hidden');


let show = true;

showMoreBrands.addEventListener('click', function() {
  if (show) {
    showMoreBrandsText.textContent = 'Скрыть';
    showMoreBrandsIcon.style['transition'] = '0.5s';
    showMoreBrandsIcon.style['transform'] = 'rotate(180deg)';

    for (let i = 0; i < brandCardTableHidden.length; i++) {
      brandCardTableHidden[i].style['display'] = 'flex';
    }

    show = false;
  } else {
    showMoreBrandsText.textContent = 'Показать все';
    showMoreBrandsIcon.style['transform'] = 'rotate(0deg)';
    
    if (pcDevice) {
      for (let i = 0; i < brandCardPcHidden.length; i++) {
        brandCardPcHidden[i].style['display'] = 'none';
      }
    } else {
      for (let i = 0; i < brandCardTableHidden.length; i++) {
        brandCardTableHidden[i].style['display'] = 'none';
      }
    }
    show = true;
  }
});