
let screenWidth = document.documentElement.clientWidth;
const repairBrandsList = document.querySelector('.repair-brands__catalog');

if (screenWidth < 768) {
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
}

else {
  repairBrandsCatalog.classList.remove('repair-brands__catalog--mySwiper');
  repairBrandsCatalog.classList.add('repair-brands__catalog--grid');
}
