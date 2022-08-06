const header = document.querySelector('header');
const burgerMenu = document.querySelector('.burger__container');
const navMenu = document.querySelector('.nav');
let scrollPos;


//show fixed header
window.addEventListener('scroll', showFixedNav, false);
window.addEventListener('load', showFixedNav, false);

function showFixedNav() {
    scrollPos = window.scrollY;

    if (scrollPos > 10 ) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    };
}

//menu burger appearance
if (burgerMenu) {
    burgerMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        navMenu.classList.toggle('_active');
    })
};