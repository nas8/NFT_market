const header = document.querySelector('header');
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