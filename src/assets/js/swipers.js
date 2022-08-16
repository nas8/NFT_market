import Swiper from 'swiper/bundle';

const swiperLatestAuct = new Swiper('.swiper-latest-auct', {
  slidesPerView: '1',
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween: 24,
  centeredSlides: true,
  grabCursor: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },

  breakpoints: {
    991: {
      slidesPerView: 4,
    },
    480: {
       slidesPerView: 2,
    }
 }

});

const swiperTriple = new Swiper('.swiper-triple', {
  slidesPerView: '2',
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  spaceBetween: 24,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },

});

const swiperRow= new Swiper('.swiper-row', {
  slidesPerView: '5',
  direction: 'horizontal',
  loop: true,
  speed: 4000,
  freeMode: true,
  freeModeMomentum: false,
  spaceBetween: 10,
  centeredSlides: true,

  autoplay: {
    delay: 0,
    disableOnInteraction: true,
  },

  breakpoints: {
    991: {
      slidesPerView: 15,
    },
    480: {
       slidesPerView: 7,
    }
 }
});

